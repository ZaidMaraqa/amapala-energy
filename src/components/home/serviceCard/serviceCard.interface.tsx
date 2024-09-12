export interface ServiceCardProps {
    imageUrl: string;
    _id?: string;
    title: string;
    description: string;
    category?: string;
    readTime?: number;
    news?: boolean;
    blog?: boolean;
    link: string;
}