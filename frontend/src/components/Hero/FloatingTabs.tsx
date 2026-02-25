import { useMemo, useRef, useState } from "react";
import "./FloatingTabs.css";
import closeIcon from "../../assets/icons/Hero/Close_icon.svg";
import { TAB_POOL, TabItem } from "./tabsData";

type TabView = TabItem & { viewId: string; hidden?: boolean; entering?: boolean };

    function uid() {
    return Math.random().toString(16).slice(2);
    }

    function pickRandom(excludeIds: Set<string>) {
    const candidates = TAB_POOL.filter((t) => !excludeIds.has(t.id));
    const source = candidates.length ? candidates : TAB_POOL;
    return source[Math.floor(Math.random() * source.length)];
    }

    export default function FloatingTabs() {
    const initial = useMemo<TabView[]>(() => {
        const starterIds = ["tw-crypto", "pt-popular", "fb-product", "db-ui"];
        return starterIds.map((id) => {
        const item = TAB_POOL.find((t) => t.id === id)!;
        return { ...item, viewId: uid(), hidden: false, entering: false };
        });
    }, []);

    const [tabs, setTabs] = useState<TabView[]>(initial);
    const timeouts = useRef<Record<string, number>>({});

    const handleClose = (viewId: string) => {
            setTabs((prev) => {
            const idx = prev.findIndex((t) => t.viewId === viewId);
            if (idx === -1) return prev;
            if (prev[idx].hidden) return prev;
            const copy = [...prev];
            copy[idx] = { ...copy[idx], hidden: true };
            return copy;
        });

        if (timeouts.current[viewId]) window.clearTimeout(timeouts.current[viewId]);

        timeouts.current[viewId] = window.setTimeout(() => {
        let newViewId = uid();

        setTabs((prev) => {
            const idx = prev.findIndex((t) => t.viewId === viewId);
            if (idx === -1) return prev;

            const used = new Set(prev.filter((_, i) => i !== idx).map((t) => t.id));
            let next = pickRandom(used);
            while (used.has(next.id)) next = pickRandom(used);

            const copy = [...prev];
            copy[idx] = { ...next, viewId: newViewId, hidden: false, entering: true };
            return copy;
        });

        requestAnimationFrame(() => {
            setTabs((prev) =>
            prev.map((t) => (t.viewId === newViewId ? { ...t, entering: false } : t))
            );
        });
        }, 1000);
    };

    return (
        <div className="tabs">
            {tabs.map((t) => (
                <div
                key={t.viewId}
                className={`tab${t.hidden ? " tab--hidden" : ""}${t.entering ? " tab--enter" : ""}`}
                >
                    <img className="tab__icon" src={t.icon} alt="" />
                    <div className="tab__text">
                        <div className="tab__title">{t.title} -</div>
                        <div className="tab__sub">{t.subtitle}</div>
                    </div>

                    <div className="tab__fade" />

                    <button
                        className="tab__close"
                        type="button"
                        onClick={() => handleClose(t.viewId)}
                        aria-label="Close tab"
                    >
                        <img src={closeIcon} alt="" />
                    </button>
                </div>
            ))}
        </div>
    );
}