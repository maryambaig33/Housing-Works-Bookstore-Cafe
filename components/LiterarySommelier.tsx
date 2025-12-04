import React, { useState } from 'react';
import { Sparkles, Coffee, BookOpen, Loader2, ArrowRight } from 'lucide-react';
import { getLiteraryPairings } from '../services/geminiService';
import { BookPairing } from '../types';

export const LiterarySommelier: React.FC = () => {
  const [mood, setMood] = useState('');
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<BookPairing[] | null>(null);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood || !genre) return;

    setLoading(true);
    setRecommendations(null);
    try {
      const results = await getLiteraryPairings(mood, genre);
      setRecommendations(results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="sommelier" className="py-20 bg-stone-100 border-y border-stone-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            Powered by Gemini AI
          </div>
          <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">The Literary Sommelier</h2>
          <p className="max-w-xl text-stone-600">
            Not sure what to read next? Tell our AI concierge how you're feeling, and we'll curate a perfect book and cafe drink pairing for your visit.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Input Section */}
          <div className="p-8 md:w-1/3 bg-stone-900 text-white flex flex-col justify-center">
            <form onSubmit={handleRecommend} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Current Mood</label>
                <input
                  type="text"
                  placeholder="e.g., Melancholy, Adventurous, Cozy"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="w-full bg-stone-800 border-none rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:ring-2 focus:ring-rose-500 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Favorite Genre</label>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full bg-stone-800 border-none rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-rose-500 transition appearance-none"
                >
                  <option value="">Select a genre...</option>
                  <option value="Literary Fiction">Literary Fiction</option>
                  <option value="Memoir">Memoir</option>
                  <option value="Science Fiction">Science Fiction</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Poetry">Poetry</option>
                  <option value="History">History</option>
                  <option value="Classics">Classics</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={loading || !mood || !genre}
                className="w-full bg-rose-600 hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : 'Curate Experience'}
              </button>
            </form>
          </div>

          {/* Results Section */}
          <div className="p-8 md:w-2/3 bg-stone-50 min-h-[400px]">
            {!recommendations && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-stone-400 text-center">
                <BookOpen size={48} className="mb-4 opacity-50" />
                <p>Your personalized recommendations<br/>will appear here.</p>
              </div>
            )}

            {loading && (
              <div className="h-full flex flex-col items-center justify-center text-stone-500">
                <div className="flex gap-1 mb-2">
                  <div className="w-2 h-2 bg-rose-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-rose-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-rose-500 rounded-full animate-bounce"></div>
                </div>
                <p className="text-sm font-medium">Consulting the librarian...</p>
              </div>
            )}

            {recommendations && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-serif text-2xl text-stone-800 border-b border-stone-200 pb-2">We Suggest...</h3>
                <div className="grid gap-6">
                  {recommendations.map((rec, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <h4 className="font-serif text-lg font-bold text-stone-900">{rec.bookTitle}</h4>
                        <p className="text-sm text-stone-500 mb-2 italic">by {rec.author}</p>
                        <p className="text-sm text-stone-700 leading-relaxed mb-3">{rec.description}</p>
                        <div className="flex items-start gap-2 bg-amber-50 p-3 rounded-lg border border-amber-100">
                           <Coffee size={16} className="text-amber-700 mt-0.5 shrink-0" />
                           <div>
                             <span className="text-xs font-bold text-amber-800 block uppercase">Pair With</span>
                             <span className="text-sm font-semibold text-stone-800">{rec.drinkPairing}</span>
                             <p className="text-xs text-stone-600 mt-1">{rec.drinkReason}</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
