type ContentSectionProps = {
  title: string
  children: React.ReactNode
}

const ContentSection = ({ title, children }: ContentSectionProps) => {
    return (
        <section className="relative">
  <div className="container">
    <div className="bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col gap-9 sm:gap-12 max-w-4xl mx-auto px-4 sm:px-7 py-11 md:py-15">

        {/* TITLE */}
        <div className="sticky top-0 z-20">
        <h2 className="
          w-full
          text-primary
          uppercase
          tracking-[2px]
          font-semibold
          text-2xl sm:text-3xl
          px-4 py-3
          bg-[linear-gradient(90deg,_rgba(37,99,235,0.25)_0%,_rgba(37,99,235,0)_100%)]
          backdrop-blur
        ">
          {title}
        </h2>
        </div>
            {children}
      </div>
    </div>
  </div>
</section>

    )
}

export default ContentSection