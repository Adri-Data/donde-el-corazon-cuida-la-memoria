
import React, { useState, useEffect } from 'react';
import { ForumTopic, ForumReply } from '../types';

const Forum: React.FC = () => {
    const [topics, setTopics] = useState<ForumTopic[]>([]);
    const [isCreating, setIsCreating] = useState(false);
    const [activeTopic, setActiveTopic] = useState<ForumTopic | null>(null);

    // New Topic/Reply Form State
    const [userName, setUserName] = useState(() => localStorage.getItem('forum_username') || '');
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const [newCategory, setNewCategory] = useState<ForumTopic['category']>('experiencias');
    const [replyText, setReplyText] = useState('');

    useEffect(() => {
        const saved = localStorage.getItem('forum_topics');
        if (saved) setTopics(JSON.parse(saved));
    }, []);

    const saveTopics = (updated: ForumTopic[]) => {
        setTopics(updated);
        localStorage.setItem('forum_topics', JSON.stringify(updated));
    };

    const handleCreateTopic = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userName || !newTitle || !newDesc) return;

        // Remember username
        localStorage.setItem('forum_username', userName);

        const topic: ForumTopic = {
            id: Date.now().toString(),
            title: newTitle,
            description: newDesc,
            author: userName,
            category: newCategory,
            timestamp: new Date().toLocaleDateString(),
            replies: []
        };

        saveTopics([topic, ...topics]);
        setIsCreating(false);
        setNewTitle('');
        setNewDesc('');
    };

    const handleAddReply = (e: React.FormEvent) => {
        e.preventDefault();
        if (!replyText || !activeTopic || !userName) return;

        localStorage.setItem('forum_username', userName);

        const reply: ForumReply = {
            id: Date.now().toString(),
            text: replyText,
            author: userName,
            timestamp: new Date().toLocaleString()
        };

        const updated = topics.map(t =>
            t.id === activeTopic.id ? { ...t, replies: [...t.replies, reply] } : t
        );

        saveTopics(updated);
        setActiveTopic({ ...activeTopic, replies: [...activeTopic.replies, reply] });
        setReplyText('');
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                <div>
                    <h2 className="font-serif text-5xl text-gray-800 mb-4 tracking-tight">Comunidad & Foro</h2>
                    <p className="text-gray-500 text-lg">Comparte con otros cuidadores que están pasando por lo mismo.</p>
                </div>
                {!isCreating && !activeTopic && (
                    <button
                        onClick={() => setIsCreating(true)}
                        className="bg-primary text-white px-10 py-5 rounded-[2rem] font-bold shadow-xl hover:scale-105 transition-all text-lg"
                    >
                        Nuevo Tema <i className="fas fa-plus ml-3"></i>
                    </button>
                )}
            </div>

            {!activeTopic && isCreating && (
                <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-purple-50 animate-fade-in mb-16">
                    <form onSubmit={handleCreateTopic} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 font-inter">Tu Nombre</label>
                                <input
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    placeholder="Ej: Maria García"
                                    className="w-full bg-gray-50 p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary text-lg"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 font-inter">Categoría</label>
                                <select
                                    className="w-full bg-gray-50 p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary text-lg"
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value as any)}
                                >
                                    <option value="experiencias">Experiencias</option>
                                    <option value="ayudas">Ayudas Oficiales</option>
                                    <option value="desahogo">Desahogo</option>
                                    <option value="consejos">Consejos</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 font-inter">Título del Tema</label>
                            <input
                                type="text"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                placeholder="Ej: ¿Cómo explicárselo a los nietos?"
                                className="w-full bg-gray-50 p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary text-lg"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 font-inter">Mensaje</label>
                            <textarea
                                rows={5}
                                value={newDesc}
                                onChange={(e) => setNewDesc(e.target.value)}
                                placeholder="Comparte tu duda o vivencia..."
                                className="w-full bg-gray-50 p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary text-lg"
                                required
                            />
                        </div>
                        <div className="flex justify-end gap-6 pt-6">
                            <button
                                type="button"
                                onClick={() => setIsCreating(false)}
                                className="text-gray-400 font-bold px-8 hover:text-gray-600 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="bg-primary text-white px-12 py-5 rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all"
                            >
                                Publicar Tema
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {activeTopic ? (
                <div className="space-y-8 animate-fade-in mb-24">
                    <button
                        onClick={() => setActiveTopic(null)}
                        className="flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all mb-4 px-2"
                    >
                        <i className="fas fa-arrow-left"></i> Volver al foro
                    </button>

                    <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-purple-50">
                        <div className="flex justify-between items-start mb-10">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-purple-50 text-primary px-4 py-2 rounded-full mb-6 inline-block">
                                    {activeTopic.category}
                                </span>
                                <h3 className="font-serif text-4xl text-gray-800 leading-tight">{activeTopic.title}</h3>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-700 text-lg">{activeTopic.author}</p>
                                <p className="text-xs text-gray-400 mb-2">{activeTopic.timestamp}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-xl leading-relaxed whitespace-pre-wrap mb-10 text-justify">
                            {activeTopic.description}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] px-8">Respuestas ({activeTopic.replies.length})</h4>
                        {activeTopic.replies.map(reply => (
                            <div key={reply.id} className="bg-white p-10 rounded-[2.5rem] border border-purple-50 shadow-sm ml-8 md:ml-20 transform hover:-translate-x-2 transition-transform">
                                <div className="flex justify-between mb-4">
                                    <span className="font-bold text-primary italic text-lg">{reply.author}</span>
                                    <span className="text-[10px] text-gray-300 font-bold uppercase">{reply.timestamp}</span>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed">{reply.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-purple-50 p-10 rounded-[3rem] mt-12 border border-primary/10">
                        <form onSubmit={handleAddReply} className="space-y-6">
                            <div className="grid md:grid-cols-4 gap-6">
                                <div className="md:col-span-1 space-y-2">
                                    <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest px-4">Tu Nombre</label>
                                    <input
                                        type="text"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Tu nombre..."
                                        className="w-full bg-white p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary shadow-inner"
                                        required
                                    />
                                </div>
                                <div className="md:col-span-3 space-y-2">
                                    <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest px-4">Escribe tu respuesta...</label>
                                    <textarea
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                        rows={2}
                                        className="w-full bg-white p-5 rounded-2xl border-none focus:ring-2 focus:ring-primary shadow-inner text-lg"
                                        placeholder="Tu apoyo o comentario..."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="bg-primary text-white px-12 py-5 rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all">
                                    Responder <i className="fas fa-paper-plane ml-3"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="grid gap-8">
                    {topics.length === 0 ? (
                        <div className="text-center py-32 bg-white rounded-[3.5rem] border border-dashed border-purple-200">
                            <i className="fas fa-comments text-5xl text-purple-100 mb-6"></i>
                            <p className="text-gray-400 text-xl font-light italic">Aún no hay temas, sé el primero en compartir.</p>
                        </div>
                    ) : (
                        topics.map(topic => (
                            <button
                                key={topic.id}
                                onClick={() => setActiveTopic(topic)}
                                className="bg-white p-12 rounded-[3.5rem] border border-purple-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all text-left group grid md:grid-cols-4 items-center gap-10"
                            >
                                <div className="md:col-span-3 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-purple-50 text-primary px-4 py-2 rounded-full transform group-hover:scale-110 transition-transform">
                                            {topic.category}
                                        </span>
                                        <span className="text-[10px] text-gray-300 font-bold uppercase">{topic.timestamp}</span>
                                    </div>
                                    <h3 className="font-serif text-3xl text-gray-800 group-hover:text-primary transition-colors leading-tight">
                                        {topic.title}
                                    </h3>
                                    <p className="text-gray-500 line-clamp-2 text-lg font-light leading-relaxed">
                                        {topic.description}
                                    </p>
                                </div>
                                <div className="md:col-span-1 text-center md:text-right border-t md:border-t-0 md:border-l border-purple-50 pt-8 md:pt-0 md:pl-8">
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Publicado por</p>
                                    <p className="font-bold text-gray-700 italic text-xl mb-4">{topic.author}</p>
                                    <div className="text-primary font-bold inline-flex items-center gap-2 bg-purple-50 px-6 py-3 rounded-full text-sm group-hover:bg-primary group-hover:text-white transition-all">
                                        {topic.replies.length} <i className="fas fa-reply text-[10px]"></i>
                                    </div>
                                </div>
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Forum;
