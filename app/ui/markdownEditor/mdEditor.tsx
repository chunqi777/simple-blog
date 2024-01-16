'use client'

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './MDEditor.module.css';


function MDEditor() {
    const [markdownText, setMarkdownText] = useState('');
    useEffect(() => {
        const storedMarkdownText = decodeURIComponent(document.cookie.split('=')[1] || '');
        setMarkdownText(storedMarkdownText);
    }, [])

    const handleInputChange = (event: any) => {
        setMarkdownText(event.target.value);
        document.cookie = `markdownText=${encodeURIComponent(event.target.value)}; max-age=3153600; path=/`;
    };

    return (
        <div className={styles.markdown}>
            <textarea rows={10} value={markdownText} onChange={handleInputChange} />
            <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
    );
}

export default MDEditor;