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

export { IMAGE_FRAGMENT };
