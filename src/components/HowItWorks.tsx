import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Rent a Pouch, Become a Member',
      description: 'Parents, schools, and organizations rent lockable phone pouches and automatically become co-op members with voting rights',
    },
    {
      number: 2,
      title: 'Profits Fund Education',
      description: '100% of profits go to tech education - talks, AI training, workshops, and more',
    },
    {
      number: 3,
      title: 'You Decide Where',
      description: 'Co-op members vote on and review which educational programs to commission',
    },
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
