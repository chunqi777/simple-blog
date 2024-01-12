'use client'

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './MDEditor.module.css';


function MDEditor() {
    const [markdownText, setMarkdownText] = useState('');

    const handleInputChange = (event: any) => {
        setMarkdownText(event.target.value);
    };

    return (
        <div className={styles.markdown}>
            <textarea rows={10} value={markdownText} onChange={handleInputChange} />
            <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
    );
}

export default MDEditor;