"use client"

import { useState } from "react";
import SearchByArea from "@/components/Search/DisplaySearchOption/SearchByArea";

// プレゼンテーショナルコンポーネント
const CompetitionList = ({ names }) => (
  <div>
    {names.map((name) => (
      <div key={name}>{name}</div>
    ))}
  </div>
);

// タブ切り替え用ボタン群コンポーネント
const TabButtons = ({ buttons, active, onSelect }) => (
  <div>
    {buttons.map(({ label }) => (
      <button
        key={label}
        onClick={() => onSelect(label)}
        style={{ fontWeight: active === label ? 'bold' : 'normal' }}
      >
        {label}
      </button>
    ))}
  </div>
);

// アクティブタブに応じたコンテンツ表示コンポーネント
const ContentPanel = ({ active, competitions, areas }) => {
  if (active === "competition") {
    return <CompetitionList names={competitions} />;
  }
  if (active === "area") {
    return <SearchByArea areas={areas} />;
  }
  return null;
};

const Search = () => {
  const BTN_LIST = [{ label: "competition" }, { label: "area" }];
  const [activeTab, setActiveTab] = useState("");
  const [competitions, setCompetitions] = useState([]);
  const [areas, setAreas] = useState([]);

  const handleSelect = async (tab) => {
    setActiveTab(tab);

    try {
      if (tab === "competition") {
        const token = process.env.NEXT_PUBLIC_FOOTBALL_DATA_API_TOKEN;
        const res = await fetch("https://api.football-data.org/v4/competitions", {
          headers: { "X-Auth-Token": token }
        });
        const data = await res.json();
        setCompetitions(data.competitions.map((item) => item.name));
      }

      if (tab === "area") {
        const res = await fetch("/api/areas");
        const data = await res.json();
        setAreas(data.areas);
      }
    } catch (error) {
      console.error(`Failed to fetch for ${tab}:`, error);
    }
  };

  return (
    <>
      <TabButtons
        buttons={BTN_LIST}
        active={activeTab}
        onSelect={handleSelect}
      />
      <ContentPanel
        active={activeTab}
        competitions={competitions}
        areas={areas}
      />
    </>
  );
};

export default Search;
