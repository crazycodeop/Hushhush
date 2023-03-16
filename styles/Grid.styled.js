import styled from "styled-components";
import { setuColours } from "./SetuColors";
import { defaultColours } from "fictoan-react";
export const IndexStyled = styled.article`
	.image-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 0.5rem;
		overflow: hidden;
		width: 100%;
		max-width: 500px;
		border: 2px solid ${defaultColours.teal60};
	}
	.image-grid .image-item {
		position: relative;
		overflow: hidden;
		transition: 0.225s all;
		width: 100%;
		height: 120px;
		border-radius: 3px;
	}

	.image-item:hover {
		filter: brightness(50%);
	}

	.image-selected {
		overflow: hidden;
		border-radius: 3px;
		filter: brightness(80%) blur(1.5px);
	}

	.image-item-containter {
		position: relative;
	}
	.image-item-badge {
		display: flex;
		height: 100%;
		width: 100%;
		position: absolute;
		p {
			width: 100%;
			z-index: 1000;
			display: grid;
			place-items: center;
			font-size: 2rem;
		}
	}
`;
