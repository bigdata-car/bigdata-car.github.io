import React from 'react';
import clsx from 'clsx';
import BlogListPage from '@theme-original/BlogListPage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function BlogHorizontalList({items, metadata}) {
  return (
    <Layout
      title={metadata.blogTitle}
      description={metadata.blogDescription}>
      <header className={clsx('hero')} style={{backgroundColor: 'transparent'}}>
        <div className="container">
          <h1 className="hero__title">{metadata.blogTitle}</h1>
          <p className="hero__subtitle">{metadata.blogDescription}</p>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            {items.map(({content: BlogPostContent}) => {
               const {metadata: postMetadata, frontMatter} = BlogPostContent;
               const {permalink, title, description, date, formattedDate, authors} = postMetadata;
              //  console.log('Post Metadata:', postMetadata);
               const image = frontMatter.image;

               return (
                 <div key={permalink} className="card margin-bottom--lg shadow--md">
                   <div className="card__body blog-card">
                      {image && (
                        <div className="blog-card__image-container">
                          <img 
                            src={image} 
                            alt={title} 
                            className="blog-card__image"
                          />
                        </div>
                      )}
                      <div className="blog-card__content">
                         <h3 style={{marginBottom: '0.5rem'}}>
                           <Link to={permalink} style={{color: 'inherit', textDecoration: 'none'}}>
                             {title}
                           </Link>
                         </h3>
                         
                         <div className="margin-bottom--md" style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-600)'}}>
                            <span>{new Date(date).toLocaleDateString('ko-KR', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
                            {authors.length > 0 && (
                              <>
                                <span className="margin-horiz--sm">·</span>
                                <span>{authors.map(a => a.name).join(', ')}</span>
                              </>
                            )}
                         </div>

                         <p className="margin-bottom--md" style={{flex: 1}}>
                           {description}
                         </p>
                         
                         <div>
                            <Link to={permalink} className="button button--primary button--sm">
                              Read More
                            </Link>
                         </div>
                      </div>
                   </div>
                 </div>
               )
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default function BlogListPageWrapper(props) {
  const location = useLocation();
  const isBlog = location.pathname.startsWith('/usecase');

  if (isBlog) {
    return <BlogHorizontalList {...props} />;
  }

  return (
    <>
      <BlogListPage {...props} />
    </>
  );
}
