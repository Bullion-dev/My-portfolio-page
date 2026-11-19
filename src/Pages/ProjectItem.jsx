

function ProjectItem({title,summary}) {
    return(
<article className="border-b border-line py-6">
    <h3 className="font-display text-2xl font-bold hover:text-accent hover:">{title}</h3>
    <p className="mt-3 max-w-prose text-muted">{summary}</p>
</article>
)
}






export default ProjectItem;