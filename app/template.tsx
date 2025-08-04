import { ReactNode } from 'react';
import SEO from '@/components/SEO';

interface TemplateProps {
    children: ReactNode;
    title?: string;
    description?: string;
}

export default function Template({
    children,
    title = 'Default Title',
    description
}: TemplateProps) {
    return (
        <>
            <SEO title={title} description={description} />
            {children}
        </>
    );
}

