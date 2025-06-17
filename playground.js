// playground.js
class CodePlayground {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            readOnly: false,
            language: 'python',
            theme: 'dracula',
            ...options
        };
        this.setupPlayground();
    }

    setupPlayground() {
        // Create editor container
        const editorContainer = document.createElement('div');
        editorContainer.className = 'editor-container';
        
        // Create toolbar
        const toolbar = document.createElement('div');
        toolbar.className = 'playground-toolbar';
        toolbar.innerHTML = `
            <button class="run-btn">▶ Run</button>
            <button class="reset-btn">↺ Reset</button>
        `;
        
        // Create output area
        const output = document.createElement('div');
        output.className = 'output-area';
        
        // Add all elements to container
        this.container.appendChild(toolbar);
        this.container.appendChild(editorContainer);
        this.container.appendChild(output);
        
        // Initialize CodeMirror
        this.editor = CodeMirror(editorContainer, {
            mode: this.options.language,
            theme: this.options.theme,
            lineNumbers: true,
            readOnly: this.options.readOnly,
            value: this.options.code || '',
            viewportMargin: Infinity,
            lineWrapping: true
        });
        
        // Setup event listeners
        toolbar.querySelector('.run-btn').addEventListener('click', () => this.runCode());
        toolbar.querySelector('.reset-btn').addEventListener('click', () => this.resetCode());
    }
    
    runCode() {
        const output = this.container.querySelector('.output-area');
        const code = this.editor.getValue();
        
        // For demonstration, we'll show what would happen
        // In a real implementation, you'd need to use a backend service or WASM
        output.innerHTML = `<div class="output-content">
            <p class="text-yellow-400">Running code...</p>
            <pre class="text-gray-300">${this.simulateOutput(code)}</pre>
        </div>`;
    }
    
    resetCode() {
        this.editor.setValue(this.options.code || '');
        const output = this.container.querySelector('.output-area');
        output.innerHTML = '';
    }
    
    simulateOutput(code) {
        return `# This is a simulated output
# In a real implementation, this would execute the code
# and show actual results

Code length: ${code.length} characters
Lines: ${code.split('\n').length}`;
    }
}

// Add styles
const style = document.createElement('style');
style.textContent = `
.playground-container {
    background: #282a36;
    border-radius: 8px;
    overflow: hidden;
    margin: 1rem 0;
}

.playground-toolbar {
    background: #44475a;
    padding: 0.5rem;
    display: flex;
    gap: 0.5rem;
}

.playground-toolbar button {
    background: #6272a4;
    color: #f8f8f2;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Roboto Mono', monospace;
    transition: background-color 0.3s;
}

.playground-toolbar button:hover {
    background: #8be9fd;
    color: #282a36;
}

.editor-container {
    min-height: 200px;
}

.CodeMirror {
    height: auto !important;
    font-family: 'Roboto Mono', monospace;
}

.output-area {
    background: #1a1b24;
    color: #f8f8f2;
    padding: 1rem;
    font-family: 'Roboto Mono', monospace;
    min-height: 100px;
    max-height: 200px;
    overflow-y: auto;
}

.output-content {
    white-space: pre-wrap;
}
`;
document.head.appendChild(style);
