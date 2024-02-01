
export default function AboutHome() {
    return (
        <div className="w-full h-screen bg-origin-100 sm:bg-slate-50">
            <div className="w-full sm:w-[530px] relative top-1/2 -translate-y-1/2 mx-auto bg-origin-100 rounded-lg p-6">
                <h1 className="text-4xl text-center pb-4">关于本站</h1>
                <div>
                    <span className="pl-8 text-lg break-all py-2">
                        本站是一个前后端的动态网站, 前端主要使用 next.js 14.0 + typescript 作为框架并使用 tailwindcss 作为样式库,
                        使用 react-markdown 作为渲染并在 github-markdown 的样式基础上进行修改, 代码高亮则使用 react-syntax-highlighter, 并
                        添加 remarkGfm 用于 markdown 表格的渲染。
                    </span>
                </div>
                <div>
                    <span className="pl-8 text-lg break-all py-2">
                        后端则使用 springboot 作为框架, 数据库使用 mysql, 并使用 mybatis-plus 作为 ORM 框架
                    </span>
                </div>
                <div>
                    <span className="pl-8 text-lg break-all py-2">
                        本站主要作为记录一些学习笔记和一些个人项目的地方, 同时也会作为一些技术分享的地方。
                    </span>
                </div>
            </div>
        </div>
    )
}