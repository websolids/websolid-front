import {notFound} from 'next/navigation';
import Link from 'next/link';
import {Header,Footer} from '../../components';
import {cases} from '../../data';

export function generateStaticParams(){
  return cases.map(c=>({slug:c.slug}));
}

export async function generateMetadata({params}){
  const {slug} = await params;
  const c=cases.find(x=>x.slug===slug);
  if(!c)return {};
  return {title:`${c.title} — кейс Вебсолид`, description:c.text};
}

export default async function Project({params}){
  const {slug} = await params;
  const c=cases.find(x=>x.slug===slug);
  if(!c)notFound();
  return <><Header/><main className="inner"><div className="wrap">
    <p className="eyebrow"><i/> Проект</p>
    <h1>{c.title}</h1>
    <p className="lede">{c.lede}</p>
    <div className="project-result"><b>{c.result}</b><span>{c.resultText}</span></div>
    <section className="project-block"><h2>Задача</h2><p>{c.task}</p></section>
    <section className="project-block"><h2>Что сделали</h2><ul>{c.solution.map((t,i)=><li key={i}>{t}</li>)}</ul></section>
    <section className="service-expect"><h2>Ключевые возможности</h2><ul>{c.features.map((f,i)=><li key={i}>{f}</li>)}</ul></section>
    <div className="project-actions"><Link className="button" href="/#contact">Обсудить похожий проект ↗</Link><a className="button ghost" href={c.href} target="_blank" rel="noreferrer">Открыть сайт ↗</a></div>
  </div></main><Footer/></>}