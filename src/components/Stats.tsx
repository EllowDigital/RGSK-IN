const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '500+', label: 'Projects Completed' },
  { number: '5+', label: 'Years Experience' },
  { number: '98%', label: 'Success Rate' },
]

export const Stats = () => {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-primary-foreground/70 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
