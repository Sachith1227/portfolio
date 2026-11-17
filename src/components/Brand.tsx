type BrandProps = { showCaption?: boolean }

export default function Brand({ showCaption = false }: BrandProps) {
  return (
    <a className="brand" href="#home" aria-label="Chamalka home">
      <img className="brand-mark" src="/logo.png" alt="" />
      {showCaption && (
        <span className="brand-caption">
          CHAMALKA
        </span>
      )}
    </a>
  )
}
