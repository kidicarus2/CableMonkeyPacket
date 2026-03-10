{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  buildInputs = with pkgs; [
    # repo management
    git
    gh

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
