export type ThermoGuardStoryFrame = {
  id: string;
  image: string;
  alt: string;
  heading: string;
  copy: string;
  keyLine: string;
};

export const thermoguardStoryFrames: ThermoGuardStoryFrame[] = [
  {
    id: "normal-operation",
    image: "/story/thermoguard/frame-01-normal-operation.png",
    alt: "Electrical equipment room in normal operation before early thermal risk is visible.",
    heading: "Normal operation hides early thermal risk",
    copy: "Equipment rooms can look stable from the outside while heat patterns slowly change behind panels, fans, and critical electrical assets.",
    keyLine: "Continuous visibility starts here.",
  },
  {
    id: "sensor-monitoring",
    image: "/story/thermoguard/frame-02-sensor-monitoring.png",
    alt: "Wireless thermal sensor positioned near a critical heat-risk point.",
    heading: "A wireless sensor watches the heat-risk point",
    copy: "Placed near critical connections, the sensor continuously tracks temperature where heat build-up is most likely to begin.",
    keyLine: "Small sensor. Critical visibility.",
  },
  {
    id: "heat-pattern-visible",
    image: "/story/thermoguard/frame-03-heat-pattern-visible.png",
    alt: "Thermal pattern becoming visible around monitored electrical equipment.",
    heading: "Thermal behaviour begins to change",
    copy: "ThermoGuard AI detects early temperature rise and observes how heat behaves under changing operational load.",
    keyLine: "Early change becomes visible.",
  },
  {
    id: "ai-learns-patterns",
    image: "/story/thermoguard/frame-04-ai-learns-patterns.png",
    alt: "ThermoGuard AI learning temperature, cooling, and load behaviour patterns.",
    heading: "AI learns the patterns behind the heat",
    copy: "ThermoGuard AI analyses thermal trends, cooling behaviour, and operational load patterns to distinguish normal activity from abnormal change.",
    keyLine: "From raw signal to learned behaviour.",
  },
  {
    id: "predicts-cooling-demand",
    image: "/story/thermoguard/frame-05-predicts-cooling-demand.png",
    alt: "Prediction view showing cooling demand before thermal escalation.",
    heading: "AI predicts cooling demand before heat escalates",
    copy: "ThermoGuard AI learns load and temperature patterns, then predicts when cooling demand is likely to rise so teams can prepare earlier.",
    keyLine: "Prediction before escalation.",
  },
  {
    id: "guided-action",
    image: "/story/thermoguard/frame-06-guided-action.png",
    alt: "Guided maintenance action generated from abnormal thermal behaviour.",
    heading: "AI turns risk into guided action",
    copy: "When abnormal thermal behaviour is detected, ThermoGuard AI gives clear context, risk visibility, and recommended maintenance action.",
    keyLine: "No guessing. Clear next steps.",
  },
  {
    id: "cooling-response",
    image: "/story/thermoguard/frame-07-cooling-response.png",
    alt: "Cooling response adapting to real-time thermal demand.",
    heading: "Cooling response adapts to demand",
    copy: "ThermoGuard AI can recommend cooling action or integrate with client systems to automate fan response based on real-time thermal behaviour.",
    keyLine: "Manual by default. Automated when required.",
  },
  {
    id: "alert-routed",
    image: "/story/thermoguard/frame-08-alert-routed.png",
    alt: "Context-rich alert routed to the right response team.",
    heading: "The right people are alerted instantly",
    copy: "When risk crosses the threshold, ThermoGuard AI sends context-rich alerts with severity, location, and recommended next steps.",
    keyLine: "Right alert. Right person. Right time.",
  },
  {
    id: "evidence-recorded",
    image: "/story/thermoguard/frame-09-evidence-recorded.png",
    alt: "Resolved event trail recorded as maintenance evidence.",
    heading: "Every action becomes evidence",
    copy: "From alert to resolution, ThermoGuard AI records the full event trail so teams can prove action, review outcomes, and improve future response.",
    keyLine: "Detected. Acted on. Recorded.",
  },
];
