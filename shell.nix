{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    # Node.js runtime
    nodejs_20
    
    # Hugo for static site generation
    hugo
  ];

  # Environment variables
  shellHook = ''
    echo "Technical Floor Plans - Development Environment"
    echo "Run 'npm install' then 'npm start' to begin"
  '';
}
