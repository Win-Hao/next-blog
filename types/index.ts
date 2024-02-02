export interface article {
    ID: number,
    title: string,
    description: string,
    content: string,
    category: {
        id: number,
        title: string,
        description: string
    }
}

export interface category {
    id: number,
    title: string,
    description: string,
    articleNum: number
}

export interface Paths {
    id: number,
    title: string,
    address: string,
    icon: JSX.Element
}


export interface CateArtCount {
    category_id: number,
    category_title: string,
    articles_count: number
}

export interface Role {
    id: number
    title: string
    description: string
    status: boolean
}

export interface Manager {
    id: number,
    username: string,
    mobile: number,
    email: string,
    role_id: number,
    status: boolean,
    is_super: number,
    created_at: number
    role: {
        id: number,
        title: string,
        description: string,
        status: boolean
    }
}

export interface Module {
    id: number,
    name: string
}
