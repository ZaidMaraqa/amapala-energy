export interface ServiceCardProps {
    imageUrl: string;
    _id?: string;
    title: string;
    description: string;
    category?: string;
    readTime?: number;
    news?: boolean;
    country: string;
    country_code: string;
    article_type: string;
    blog?: boolean;
    link: string;
}