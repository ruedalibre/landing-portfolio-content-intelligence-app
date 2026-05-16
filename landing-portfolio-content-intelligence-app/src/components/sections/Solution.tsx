import { useMemo } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Position,
  Background,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useTranslation } from "react-i18next";
import LoopNode from "./LoopNode";

const nodeTypes = { loopNode: LoopNode };

const TERRACOTA = "#c47859";
const SLATE = "#364965";

const edgeStyle = (color: string) => ({
  stroke: color,
  strokeWidth: 1.5,
  strokeDasharray: "6 4",
});

const Solution = () => {
  const { t } = useTranslation("solution");

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const desktopPos = {
    "1": { x: 0, y: 0 },
    "2": { x: 440, y: 0 },
    "3": { x: 440, y: 280 },
    "4": { x: 0, y: 280 },
  };

  const mobilePos = {
    "1": { x: 0, y: 0 },
    "2": { x: 0, y: 180 },
    "3": { x: 0, y: 360 },
    "4": { x: 0, y: 540 },
  };

  const pos = isMobile ? mobilePos : desktopPos;

  const nodes = useMemo(
    () => [
      {
        id: "1",
        type: "loopNode",
        position: pos["1"],
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: {
          phase: t("steps.capture.phase"),
          title: t("steps.capture.title"),
          line1: t("steps.capture.line1"),
          line2: t("steps.capture.line2"),
          accent: "terracota",
        },
      },
      {
        id: "2",
        type: "loopNode",
        position: pos["2"],
        sourcePosition: isMobile ? Position.Bottom : Position.Bottom,
        targetPosition: isMobile ? Position.Top : Position.Left,
        data: {
          phase: t("steps.convert.phase"),
          title: t("steps.convert.title"),
          line1: t("steps.convert.line1"),
          line2: t("steps.convert.line2"),
          accent: "terracota",
        },
      },
      {
        id: "3",
        type: "loopNode",
        position: pos["3"],
        sourcePosition: isMobile ? Position.Bottom : Position.Left,
        targetPosition: isMobile ? Position.Top : Position.Top,
        data: {
          phase: t("steps.insights.phase"),
          title: t("steps.insights.title"),
          line1: t("steps.insights.line1"),
          line2: t("steps.insights.line2"),
          accent: "slate",
        },
      },
      {
        id: "4",
        type: "loopNode",
        position: pos["4"],
        sourcePosition: isMobile ? Position.Bottom : Position.Top,
        targetPosition: isMobile ? Position.Top : Position.Right,
        data: {
          phase: t("steps.grow.phase"),
          title: t("steps.grow.title"),
          line1: t("steps.grow.line1"),
          line2: t("steps.grow.line2"),
          accent: "slate",
        },
      },
    ],
    [t, isMobile],
  );

  const edges = useMemo(
    () => [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        type: "step",
        animated: true,
        style: edgeStyle(TERRACOTA),
      },
      {
        id: "e2-3",
        source: "2",
        target: "3",
        type: "step",
        animated: true,
        style: edgeStyle(TERRACOTA),
      },
      {
        id: "e3-4",
        source: "3",
        target: "4",
        type: "step",
        animated: true,
        style: edgeStyle(SLATE),
      },
      {
        id: "e4-1",
        source: "4",
        target: "1",
        type: "step",
        animated: true,
        style: edgeStyle(SLATE),
      },
    ],
    [],
  );

  const [rfNodes, , onNodesChange] = useNodesState(nodes);
  const [rfEdges, , onEdgesChange] = useEdgesState(edges);

  return (
    <section id="how-it-works" className="solution reveal">
      <div className="container solution__content">
        <div className="solution__header">
          <span className="section-label">{t("label")}</span>
          <h2 className="solution__title">
            {t("title")}{" "}
            <span className="solution__highlight">{t("highlight")}</span>
          </h2>
          <p className="solution__subtitle">{t("subtitle")}</p>
        </div>

        <div className="solution__diagram">
          <ReactFlowProvider>
            <ReactFlow
              nodes={rfNodes}
              edges={rfEdges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{ padding: 0.18 }}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              panOnDrag={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}
              proOptions={{ hideAttribution: true }}
            >
              <Background
                variant={BackgroundVariant.Dots}
                gap={24}
                size={1}
                color="var(--border-subtle)"
              />
            </ReactFlow>
          </ReactFlowProvider>
        </div>
      </div>
    </section>
  );
};

export default Solution;
