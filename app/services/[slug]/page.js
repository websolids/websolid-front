import {notFound} from 'next/navigation';
import Link from 'next/link';
import {Header,Footer} from '../../components';
import {services} from '../../data';

export function generateStaticParams(){
  return services.map(s=>({slug:s.slug}));
}

export async function generateMetadata({params}){
  const {slug} = await params;
  const s=services.find(x=>x.slug===slug);
  if(!s)return {};
  return {title:`${s.title} — Вебсолид`, description:s.text};
}

export default async function Service({params}){
  const {slug} = await params;
  const s=services.find(x=>x.slug===slug);
  if(!s)notFound();
  return <><Header/><main className="inner"><div className="wrap">
    <p className="eyebrow"><i/> Услуга</p>
    <h1>{s.title}</h1>
    <p className="lede">{s.lede}</p>
    <div className="detail-grid">{s.steps.map((st,i)=><div key={i}><span>0{i+1}</span><h2>{st.title}</h2><p>{st.text}</p></div>)}</div>
    <section className="service-expect"><h2>Что вы получаете</h2><ul>{s.deliverables.map((d,i)=><li key={i}>{d}</li>)}</ul></section>
    <div className="service-cta"><Link className="button" href="/#contact">Обсудить задачу ↗</Link></div>
  </div></main><Footer/></>}
