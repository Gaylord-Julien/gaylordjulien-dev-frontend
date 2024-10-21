const IMAGE_FRAGMENT = `#graphql
fragment ImageFragment on UploadFile {
    alternativeText
    height
    width
    mime
    name
    url
    #    placeholder
}
`;

const SEO_FRAGMENT = `#graphql
fragment SeoFragment on ComponentSharedSeo {
    structuredData
    metaTitle
    metaDescription
    metaImage {
        width
        url
        alternativeText
    }
    metaSocial {
        id
        socialNetwork
        title
        description
        image {
            url
            width
            height
            mime
            alternativeText
        }
    }
}
`;

export { IMAGE_FRAGMENT, SEO_FRAGMENT };
