
import React, { useState, useEffect } from 'react';
import { NotebookEntry } from '../types';

const Notebook: React.FC = () => {
    const [entries, setEntries] = useState<NotebookEntry[]>([]);
    const [showAdd, setShowAdd] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newMood, setNewMood] = useState<NotebookEntry['mood']>('regular');

    useEffect(() => {
        const saved = localStorage.getItem('notebook_entries');
        if (saved) {
            setEntries(JSON.parse(saved));
        }
    }, []);

    const saveEntries = (newEntries: NotebookEntry[]) => {
        setEntries(newEntries);
        localStorage.setItem('notebook_entries', JSON.stringify(newEntries));
    };

    const handleAddEntry = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle || !newContent) return;

        const entry: NotebookEntry = {
            id: Date.now().toString(),
            date: new Date().toLocaleDateString(),
            title: newTitle,
            content: newContent,
            mood: newMood
        };

        saveEntries([entry, ...entries]);
        setNewTitle('');
        setNewContent('');
        setShowAdd(false);
    };

    const getMoodEmoji = (mood?: NotebookEntry['mood']) => {
        switch (mood) {
            case 'bueno': return '😊';
            case 'regular': return '😐';
            case 'dificil': return '😔';
            default: return '📝';
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h2 className="font-serif text-4xl text-gray-800">Mi Cuaderno Privado</h2>
                    <p className="text-gray-500 mt-2">Un espacio seguro para tus pensamientos y el seguimiento diario.</p>
                </div>
                {!showAdd && (
                    <button
                        onClick={() => setShowAdd(true)}
                        className="btn-primary flex items-center gap-2"
                    >
                        <i className="fas fa-plus"></i> Nueva Entrada
                    </button>
                )}
            </div>

            {showAdd ? (
                <form onSubmit={handleAddEntry} className="animate-fade-in bg-white p-8 rounded-3xl shadow-sm border border-purple-50 space-y-6">
                    <h3 className="text-2xl font-serif">¿Cómo ha ido el día?</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Título del día</label>
                        <input
                            type="text"
                            value={newTitle}
                            onChange={e => setNewTitle(e.target.value)}
                            className="w-full p-4 rounded-xl border border-purple-100"
                            placeholder="Ej: Paseo por el parque"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-4">Estado de ánimo predominante</label>
                        <div className="flex gap-4">
                            {(['bueno', 'regular', 'dificil'] as const).map(m => (
                                <button
                                    key={m}
                                    type="button"
                                    onClick={() => setNewMood(m)}
                                    className={`flex-grow p-4 rounded-2xl border-2 transition-all ${newMood === m ? 'border-primary bg-purple-50' : 'border-gray-50 bg-white'}`}
                                >
                                    <span className="text-2xl block mb-1">{getMoodEmoji(m)}</span>
                                    <span className="text-xs uppercase font-bold text-gray-500">{m}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Reflexiones o notas</label>
                        <textarea
                            value={newContent}
                            onChange={e => setNewContent(e.target.value)}
                            className="w-full p-4 rounded-xl border border-purple-100"
                            rows={6}
                            placeholder="Escribe con total libertad..."
                        />
                    </div>
                    <div className="flex gap-4">
                        <button type="submit" className="btn-primary">Guardar en mi cuaderno</button>
                        <button type="button" onClick={() => setShowAdd(false)} className="text-gray-400">Cancelar</button>
                    </div>
                </form>
            ) : (
                <div className="grid gap-6">
                    {entries.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-3xl border border-purple-50 dotted">
                            <i className="fas fa-book-open text-4xl text-gray-200 mb-4"></i>
                            <p className="text-gray-400">Tu cuaderno está vacío. Empieza a escribir hoy mismo.</p>
                        </div>
                    ) : (
                        entries.map(e => (
                            <div key={e.id} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-50 relative group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-3xl">{getMoodEmoji(e.mood)}</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">{e.title}</h3>
                                            <span className="text-xs text-gray-400">{e.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{e.content}</p>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Notebook;
