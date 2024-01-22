import Projects from './projects/page';
import Dashboard from './home/home'
import { Suspense } from 'react';
import Loading from './projects/Loading';


export default async function Home() {

  return (
    <main className="home-page">
      <div className="home-section">
        <Dashboard />
      </div>
      <div className="project-section">
        {/* <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense> */}
      </div>
    </main>
  );
}
