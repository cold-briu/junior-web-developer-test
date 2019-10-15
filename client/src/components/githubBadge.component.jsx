import React from "react";
import GitHubButton from "react-github-btn";
import styled from "styled-components";

const GithubContainer = styled.a`
	display: flex;
	align-content: baseline;
	justify-content: center;
	align-items: center;
`;

const url = "https://github.com/cold-briu/junior-web-developer-test";

const GithubBadge = () => (
	<GithubContainer
		href={url}
		target="blank"
		className="my-3 mx-auto text-center animated tada "
	>
		<span className="btn btn-link">SEE ON GITHUB</span>
		<GitHubButton
			aria-label="Star cold-briu/junior-web-developer-test on GitHub"
			data-icon="octicon-star"
			data-size="large"
			href={url}
		>
			Star
		</GitHubButton>
	</GithubContainer>
);

export default GithubBadge;
