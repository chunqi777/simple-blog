'use client'

import ReactMarkdown from 'react-markdown';
import './MDEditor.css';
import './github-markdown.css';

interface MDEditorProps {
    content: string; // 接收Markdown格式的文本内
}

export function MDEditor({ content }: MDEditorProps) {
    return (
        <div className="md-editor">
            <div className="markdown-body markdown">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
}