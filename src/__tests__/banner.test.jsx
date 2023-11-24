import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Banner from "../components/Banner";

describe("Banner", () => {
	test("should render correctly", () => {
		render(
			<MemoryRouter>
				<Banner />
			</MemoryRouter>
		);
		const textElement = screen.getByRole("heading", {
			name: /creative harmonious living/i,
		});
		expect(textElement).toBeInTheDocument();
	});

	test("should render correctly", () => {
		render(
			<MemoryRouter>
				<Banner />
			</MemoryRouter>
		);
		const buttonElement = screen.getByRole("button", { name: /shop now/i });
		expect(buttonElement).toBeInTheDocument();
	});

	test("should render correctly", () => {
		render(
			<MemoryRouter>
				<Banner />
			</MemoryRouter>
		);
		const bannerImage = screen.getByRole("img");
		expect(bannerImage).toBeInTheDocument();
	});
});
