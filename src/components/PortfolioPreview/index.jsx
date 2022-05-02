import { h } from 'preact';
import Styles from './styles.module.scss';

function PortfolioPreview ({ project }) {
	const { frontmatter } = project;

	return (
		<div className='w-full'>
			<div className={Styles.card}>
				<div className={Styles.titleCard} style={`background-image:url(${frontmatter.img})`}>
					<div>
						<h1 className={Styles.title}>{frontmatter.title}</h1>
					</div>
				</div>
				<div className="pa3">
					<p className={`${Styles.desc} mt0 mb2 relative`}>{frontmatter.description}</p>
					<div className={Styles.tags}>
						Tagged:
						{frontmatter.tags.map((t) => (
							<div className={Styles.tag} data-tag={t}>
								{t}
							</div>
						))}
					</div>
					<a className={Styles.link} href={project.url} target='_blank'>
						<span className={Styles.linkInner}>View</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default PortfolioPreview;
