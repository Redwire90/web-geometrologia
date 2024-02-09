import {Article} from './Article'
import {FaCheck} from "react-icons/fa"
import {FaLocationArrow} from "react-icons/fa"
import {FaEye} from "react-icons/fa"


export const ArticlesCont = () => {
  return (
    <section className='grid grid-cols-3 mx-80 gap-16 pt-16'>
      <Article
        icon={<FaCheck/>}
        title="Calidad"
        text="GEOMETROLOGIA S.A.S., y todo el personal de la organización estamos comprometidos con la buena práctica profesional, la calidad, confiabilidad, confidencialidad, competencia, imparcialidad y coherencia de operación en la prestación de servicios de calibración de instrumentos topográficos para geomática adecuados a las necesidades metrológicas de nuestros clientes y en base a métodos establecidos por normas nacionales y/o internacionales o desarrollados por nuestro equipo técnico."
      />
      <Article
        icon={<FaLocationArrow/>}
        title="Misión"
        text="Aplicar La  confirmación metrológica para instrumentos de topografía y geomática con base en normas internacionales ISO 17123, ISO 17025, ISO 9001 e ISO 10012, utilizando métodos propios que garantizan que los instrumentos propuestos en los sistemas de gestión de las mediciones para dar cumplimiento al sistema de gestión de calidad de nuestros clientes satisfacen los requisitos metrológicos especificados."
      />
      <Article
        icon={<FaEye/>}
        title="Visión"
        text="Geometrología en el año 2023 consolidará su operación bajo los lineamientos de la norma ISO-17025-2017 aportando en la cadena de valor para la educación, específicamente en áreas de la Geomática, el desarrollo de infraestructura, la explotación de recursos naturales y la administración de justicia del país."
      />
    </section>
  )
}
