import React from 'react'
import Spacer from '../../../../components/Spacer'

const services = [
  {
    title: 'Architecture Design & Evolution',
    subtitle: 'Future-proof architecture design that evolves with your business',
    items: [
      'Architecture decision records',
      'System design documentation',
      'Technical roadmap',
      'Migration strategy',
    ],
  },
  {
    title: 'Legacy System Modernisation',
    subtitle: 'Transform legacy systems into modern, maintainable codebases',
    items: [
      'Modernisation roadmap',
      'Risk assessment',
      'Refactoring guidelines',
      'Progress metrics',
    ],
  },
  {
    title: 'Technical Strategy Consulting',
    subtitle: 'Align technical decisions with business objectives',
    items: [
      'Technology radar',
      'Strategic recommendations',
      'Implementation plan',
      'Cost-benefit analysis',
    ],
  },
  {
    title: 'Team Transformation',
    subtitle: 'Build high-performing technical teams',
    items: ['Training materials', 'Practice guidelines', 'Progress metrics', 'Knowledge base'],
  },
  {
    title: 'DevOps & CI/CD',
    subtitle: 'Establish robust delivery pipelines and operations',
    items: ['Pipeline design', 'Infrastructure templates', 'Monitoring dashboards', 'Runbooks'],
  },
  {
    title: 'Software Quality & Testing',
    subtitle: 'Build quality into your development process',
    items: ['Test framework', 'Quality reports', 'Testing guidelines', 'Coverage metrics'],
  },
]

const Services: React.FC = () => {
  return (
    <>
      <div id="services" className="section">
        Technical Services
      </div>
      <Spacer size="medium" />
      <div className="subtitle">
        End-to-end software engineering services focused on maintainability, scalability, and
        business value.
      </div>
      <Spacer size="medium" />
      {services.map((service, index) => (
        <div key={index}>
          <div className="title">{service.title}</div>
          <Spacer size="small" />
          <div className="subtitle">{service.subtitle}</div>
          <Spacer size="small" />
          <div className="flex flex-row gap-medium">
            <div className="w-1/2 pl-medium">
              <div className="h-1/2 border-b-4 border-black border-l-4"></div>
              <div className="border-t-[10px] border-t-transparent border-l-[20px] border-l-black border-b-[10px] border-b-transparent relative float-end -top-[12px] left-[8px]" />
            </div>
            <div className="w-1/2">
              {service.items.map((item, index) => (
                <div key={index} className="item text">
                  {item}
                </div>
              ))}
            </div>
          </div>
          {index < services.length - 1 && <Spacer size="medium" />}
        </div>
      ))}
    </>
  )
}

export default Services
