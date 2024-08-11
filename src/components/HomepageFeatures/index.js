import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Define the features list with your icons
const FeatureList = [
  {
    title: 'Air Quality PM2.5',
    Svg: require('@site/static/img/icon_images/metsci_air quality 2_5.svg').default,
    description: (
      <>
        Measure and monitor PM2.5 particulate levels to assess air quality.
      </>
    ),
  },
  {
    title: 'Air Quality PM10',
    Svg: require('@site/static/img/icon_images/metsci_air quality_10.svg').default,
    description: (
      <>
        Measure and monitor PM10 particulate levels to ensure safe environments.
      </>
    ),
  },
  {
    title: 'Flower Growth',
    Svg: require('@site/static/img/icon_images/metsci_flower.svg').default,
    description: (
      <>
        Monitor the growth and health of flowers using advanced sensor technology.
      </>
    ),
  },
  {
    title: 'Humidity Levels',
    Svg: require('@site/static/img/icon_images/metsci_humidity.svg').default,
    description: (
      <>
        Track and maintain optimal humidity levels for various environments.
      </>
    ),
  },
  {
    title: 'Soil Moisture',
    Svg: require('@site/static/img/icon_images/metsci_moisture.svg').default,
    description: (
      <>
        Measure soil moisture levels to ensure ideal growing conditions for plants.
      </>
    ),
  },
  {
    title: 'Rainfall Measurement',
    Svg: require('@site/static/img/icon_images/metsci_rain.svg').default,
    description: (
      <>
        Accurately measure and track rainfall levels in different areas.
      </>
    ),
  },
  {
    title: 'Soil Quality',
    Svg: require('@site/static/img/icon_images/metsci_soil.svg').default,
    description: (
      <>
        Assess and monitor soil quality to optimize agricultural outputs.
      </>
    ),
  },
  {
    title: 'Temperature Monitoring',
    Svg: require('@site/static/img/icon_images/metsci_thermometer.svg').default,
    description: (
      <>
        Keep track of temperature variations with high precision.
      </>
    ),
  },
  {
    title: 'Tree Health',
    Svg: require('@site/static/img/icon_images/metsci_tree.svg').default,
    description: (
      <>
        Monitor tree growth and health indicators in forestry and urban environments.
      </>
    ),
  },
];


// Feature component
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Export HomepageFeatures as default
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}