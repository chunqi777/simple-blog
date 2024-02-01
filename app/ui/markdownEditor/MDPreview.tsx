import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import './MDEditor.css';
import './custom-styles.css';
import './github-markdown.css';

interface MDEditorProps {
    content: string | undefined,
}

export default function MDPreview({ content }: MDEditorProps) {

    return (
        <div className="markdown-body markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code: codeRenderer }}>{content}</ReactMarkdown>
        </div>
    );
}

const codeRenderer = ({ className, children }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
    // 匹配代码块的className，获取语言类型
    if (className) {
        const language = /language-(\w+)/.exec(className)?.[1];
        return (
            <SyntaxHighlighter language={language} style={darcula} showLineNumbers={true}>
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>

        )
    } else {
        return (
            <code className="bg-[#2b2b2b]">{children}</code>
        )
    }
}
