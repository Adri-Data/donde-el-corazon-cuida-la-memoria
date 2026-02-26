
import React from 'react';

const NutritionGuide: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            <div className="text-center mb-16 animate-fade-in">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Salud Nutricional</span>
                <h2 className="font-serif text-5xl text-gray-800 mt-6 mb-8 italic">
                    Nutrición <span className="text-green-600 not-italic">Cerebral</span>
                </h2>
                <div className="w-24 h-1 bg-green-200 mx-auto mb-10 rounded-full"></div>
                <p className="text-gray-500 text-xl leading-relaxed">
                    La alimentación es un pilar fundamental para ralentizar el deterioro cognitivo y mejorar la calidad de vida.
                </p>
            </div>

            <div className="space-y-16">
                <section className="bg-white rounded-[3rem] p-10 shadow-sm border border-green-50">
                    <h3 className="text-2xl font-serif text-gray-800 mb-8 italic">La Dieta MIND</h3>
                    <p className="text-gray-600 leading-relaxed mb-8 text-justify">
                        Basada en estudios científicos (Lancet 2024), la combinación de la dieta Mediterránea y la DASH ha demostrado reducir significativamente el riesgo de Alzheimer.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-3xl">
                            <h4 className="font-bold text-blue-800 mb-4 uppercase text-xs tracking-widest">Alimentos Clave</h4>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex gap-3"><i className="fas fa-leaf text-green-500"></i> Verduras de hoja verde (espinacas, acelgas)</li>
                                <li className="flex gap-3"><i className="fas fa-vial text-blue-400"></i> Frutos secos (nueces, almendras)</li>
                                <li className="flex gap-3"><i className="fas fa-fish text-blue-500"></i> Pescado azul 2-3 veces/semana</li>
                                <li className="flex gap-3"><i className="fas fa-droplet text-orange-400"></i> Aceite de oliva virgen extra</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-6 rounded-3xl">
                            <h4 className="font-bold text-red-800 mb-4 uppercase text-xs tracking-widest">A Evitar</h4>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex gap-3"><i className="fas fa-times text-red-400"></i> Carnes rojas procesadas</li>
                                <li className="flex gap-3"><i className="fas fa-burger text-red-400"></i> Grasas saturadas y trans</li>
                                <li className="flex gap-3"><i className="fas fa-spoon text-red-400"></i> Azúcares refinados</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <i className="fas fa-bottle-water"></i>
                        </div>
                        <h4 className="font-bold text-gray-800 mb-4">Hidratación</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Fundamental: 1.5 - 2 Litros de agua al día. La deshidratación causa confusión mental inmediata.</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <i className="fas fa-clock"></i>
                        </div>
                        <h4 className="font-bold text-gray-800 mb-4">Horarios Fijos</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Mantiene el metabolismo activo y reduce la ansiedad por la comida.</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <i className="fas fa-shapes"></i>
                        </div>
                        <h4 className="font-bold text-gray-800 mb-4">Texturas</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Adaptar a purés o cortado pequeño si hay problemas de deglución (disfagia).</p>
                    </div>
                </div>

                <p className="text-center text-gray-400 text-xs italic">
                    * Consulte siempre con su médico o nutricionista antes de realizar cambios drásticos en la dieta o introducir suplementos.
                </p>
            </div>
        </div>
    );
};

export default NutritionGuide;
