const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = 'annotations.json';

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// Helper functions to read/write data
function readAnnotations() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeAnnotations(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.use(cors());
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API: Get all annotations for a document
app.get('/api/annotations/:docSlug', (req, res) => {
  const { docSlug } = req.params;
  try {
    const allAnnotations = readAnnotations();
    const annotations = allAnnotations.filter(a => a.doc_slug === docSlug);
    res.json(annotations);
  } catch (err) {
    console.error('Error fetching annotations:', err);
    res.status(500).json({ error: 'Failed to fetch annotations' });
  }
});

// API: Create new annotation
app.post('/api/annotations', (req, res) => {
  const { docSlug, page, x, y, text } = req.body;
  
  if (!docSlug || !page || x === undefined || y === undefined || !text) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  try {
    const allAnnotations = readAnnotations();
    const created = new Date().toISOString();
    const id = Date.now(); // Simple ID generation
    
    const newAnnotation = {
      id,
      doc_slug: docSlug,
      page,
      x,
      y,
      text,
      created,
      replies: []
    };
    
    allAnnotations.push(newAnnotation);
    writeAnnotations(allAnnotations);
    
    res.json(newAnnotation);
  } catch (err) {
    console.error('Error creating annotation:', err);
    res.status(500).json({ error: 'Failed to create annotation' });
  }
});

// API: Add reply to annotation
app.post('/api/annotations/:id/reply', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Reply text required' });
  }
  
  try {
    const allAnnotations = readAnnotations();
    const idx = allAnnotations.findIndex(a => a.id == id);
    
    if (idx === -1) {
      return res.status(404).json({ error: 'Annotation not found' });
    }
    
    const newReply = {
      text,
      created: new Date().toISOString()
    };
    
    if (!allAnnotations[idx].replies) {
      allAnnotations[idx].replies = [];
    }
    allAnnotations[idx].replies.push(newReply);
    
    writeAnnotations(allAnnotations);
    
    res.json(newReply);
  } catch (err) {
    console.error('Error adding reply:', err);
    res.status(500).json({ error: 'Failed to add reply' });
  }
});

// API: Delete annotation
app.delete('/api/annotations/:id', (req, res) => {
  const { id } = req.params;
  
  try {
    let allAnnotations = readAnnotations();
    const initialLength = allAnnotations.length;
    allAnnotations = allAnnotations.filter(a => a.id != id);
    
    if (allAnnotations.length === initialLength) {
      return res.status(404).json({ error: 'Annotation not found' });
    }
    
    writeAnnotations(allAnnotations);
    res.json({ success: true });
  } catch (err) {
    console.error('Error deleting annotation:', err);
    res.status(500).json({ error: 'Failed to delete annotation' });
  }
});

// Serve Hugo site for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('API endpoints:');
  console.log('  GET    /api/annotations/:docSlug - Get annotations');
  console.log('  POST   /api/annotations         - Create annotation');
  console.log('  POST   /api/annotations/:id/reply - Add reply');
  console.log('  DELETE /api/annotations/:id     - Delete annotation');
});
