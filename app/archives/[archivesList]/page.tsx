


interface typeListProps {
    params: {
        typeList: string, // 类型名称
    }
}

export default function typeList({ params }: typeListProps) {
    return (
        <div>{params.typeList}</div>
    )
}