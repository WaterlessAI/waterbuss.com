import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-md mt-24">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold font-mono tracking-tighter text-white mb-4">
                            WATER<span className="text-cyan-500">BUSS</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            We believe in a future where AI advancement doesn't come at the cost of our planet's most precious resource.
                            <br /><br />
                            Compare, Analyze, Optimize.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Platform</h4>
                        <ul className="space-y-3">
                            <li><Link href="/api" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">API Access</Link></li>
                            <li><Link href="/manifesto" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Manifesto</Link></li>
                            <li><span className="text-sm text-gray-600 cursor-not-allowed">Live Map (Coming Soon)</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Community</h4>
                        <div className="flex gap-4">
                            <Link href="https://github.com/WaterlessAI" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-white text-gray-400 transition-all border border-white/5">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="https://x.com/waterbuss" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-cyan-400 text-gray-400 transition-all border border-white/5">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
                    <p>© 2026 Waterbuss. Open Source Project.</p>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <span>Waterbuss Index</span>
                        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                        <span className="text-green-500/80">100% Green Hosting</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
