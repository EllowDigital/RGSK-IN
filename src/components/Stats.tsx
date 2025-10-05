const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '300+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' },
]

export const Stats = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-white/90 text-xs sm:text-sm md:text-base font-medium px-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
