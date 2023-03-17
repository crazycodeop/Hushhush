import styled from "styled-components";
import { defaultColours } from "fictoan-react";
import { setuColours } from "@/styles/SetuColors";
export const ImageGridStyled = styled.div`
	width:100%;
	.image-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 0.5rem;
		overflow: hidden;
		width: 100%;
		border: 2px solid hsl(210deg 1.97% 87.99%);
	}
	.image-grid .image-item {
		position: relative;
		overflow: hidden;
		transition: 0.225s all;
		width: 100%;
		height: 120px;
		border-radius: 5px;
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
