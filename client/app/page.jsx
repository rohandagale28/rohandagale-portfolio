import Projects from './projects/page';
import Dashboard from './home/home'
import { Suspense } from 'react';
import Loading from './projects/loading';
import Stack from './stack/page';


export default async function Home() {

  return (
    <main className="home-page">
      <div className="home-section">
        <Dashboard />
      </div>
      {/* <Suspense fallback={<Loading />}> */}
      <div className="project-section">
        <Projects />
      </div>
      <div className="project-section">
        <Stack />
      </div>
      {/* </Suspense> */}
    </main>
  );
}
