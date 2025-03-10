import Container from './container'

export default function Footer() {
  return (
    <footer className="border-t border-accent-2 bg-gray-100">
      <Container>
        <div className="py-8 flex flex-col items-center">
          <p className="text-sm text-gray-600 mb-4">© {new Date().getFullYear()} Shubham Shrivastava. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/shubhamshrivastava11"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <img alt="GitHub logo" src="/icons/github-fill.svg" height={45} width={45} />
            </a>
            <a
              href="mailto:shubhamshrivastava813@gmail.com"
              className="transition transform hover:scale-110"
              aria-label="Email"
            >
              <img alt="Email icon" src="/icons/mail-fill.svg" height={45} width={45} />
            </a>
            <a
              href="https://linkedin.com/in/shubhamshrivastava11"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <img alt="LinkedIn logo" src="/icons/linkedin-box-fill.svg" height={45} width={45} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
