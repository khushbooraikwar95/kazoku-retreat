const { render, screen } = require('@testing-library/react');
const About = require('./page'); // Adjust the import based on your actual About component location

test('renders about page', () => {
	render(<About />);
	const linkElement = screen.getByText(/about/i);
	expect(linkElement).toBeInTheDocument();
});