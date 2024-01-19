'use client'

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './MDEditor.css';
import './github-markdown.css';

function MDEditor() {
    const [markdown, setMarkdown] = useState('');

    return (
        <div className="md-editor">
            <div className="md-input">
                <textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
            </div>
            <div className="markdown-body markdown">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

export default MDEditor;