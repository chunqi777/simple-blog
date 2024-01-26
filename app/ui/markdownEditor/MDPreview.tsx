
import ReactMarkdown from 'react-markdown';
import './MDEditor.css';
import './github-markdown.css';

interface MDEditorProps {
    content: string | undefined,
}

export default function MDPreview({ content }: MDEditorProps) {

    return (
        <div className="markdown-body markdown">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}