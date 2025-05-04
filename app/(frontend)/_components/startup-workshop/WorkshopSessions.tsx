import React from 'react'
import Spacer from '../../../../components/Spacer'

const WorkshopSessions: React.FC = () => {
  return (
    <>
      <div className="title">Workshop Structure</div>
      <Spacer size="small" />
      <div className="text">
        <div className="mb-4">
          <span className="font-bold">{`The Dialectic of Failure`}</span>
          <p>{`Thesis (user requests) vs. Antithesis (business reality): Why 25-85% of tech projects collapse in the gap. Introduce the “synthesis” mindset: engineering solutions that reconcile both.`}</p>
        </div>
        <div className="mb-4">
          <span className="font-bold">{`The Mom Test Meets Nietzsche’s Hammer`}</span>
          <p>{`Customers are humans, and we humans are, more often than not, irrational. To overcome that irrationality, we need to plot users' reality in a rational space (coordinate system), filtering any noise or contaminants.`}</p>
        </div>

        <div className="mb-4">
          <span className="font-bold">{`Building the MVP as a Mirror`}</span>
          <p>{`Design Minimum Viable Proof loops: not just product features, but experiments that validate quantifiable business outcomes. Case study: How a “toy” MVP exposed a $2M efficiency leak.`}</p>
        </div>

        <div className="mb-4">
          <span className="font-bold">{`Scalable Truths, Not Just Solutions`}</span>
          <p>{`Turn validated needs into systems that dialectically evolve with the business. Metrics that matter: Customer effort score → revenue per operational hour.`}</p>
        </div>

        <div className=" italic">
          <span className="font-bold">Outcome</span>: Leave with a checklist to turn your next
          project from a cost center into a profit lever.
        </div>
      </div>
    </>
  )
}

export default WorkshopSessions
