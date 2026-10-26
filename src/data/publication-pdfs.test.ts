import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { publications } from "./profile";

const hostedPapers = [
  [
    "Waterproof and gel-free 3D E-textile systems for exercise physiology and clinical maternal health monitoring",
    "3D_E-textile_for_Exercise_Physilogy_and_Clinical_materanl_health.pdf"
  ],
  [
    "A Low-power Impedance-to-frequency Converter for Frequency-multiplexed Wearable Sensors",
    "A_Low-Power_Impedance-to-Frequency_Converter_for_Frequency-Multiplexed_Wearable_Sensors.pdf"
  ],
  [
    "A Portable and a Scalable Multi-Channel Wireless Recording System for Wearable Electromyometrial Imaging",
    "A_Portable_and_a_Scalable_Multi-Channel_Wireless_Recording_System_for_Wearable_Electromyometrial_Imaging.pdf"
  ],
  [
    "A Soft Sponge Sensor for Multimodal Sensing and Distinguishing of Pressure, Strain, and Temperature",
    "A_Soft_Sponge_Sensor_for_Multimodal_Sensing_and_Distinguishing_ofPressure_Strain_and_Temperature.pdf"
  ],
  [
    "An Inkjet-Printed PEDOT:PSS-Based Stretchable Conductor for Wearable Health Monitoring Device Applications",
    "An_Inkjet-Printed_PEDOT-PSS-Based_Stretchable_Conductor_for_Wearable_Health_Monitoring_Device_Applications.pdf"
  ],
  [
    "High energy density in artificial heterostructures through relaxation time modulation",
    "High_energy_density_in_artificial_heterostructuresthrough_relaxation_time_modulation.pdf"
  ],
  [
    "Marangoni Convection-Driven Laser Fountains and Waves on Free Surfaces of Liquids",
    "Marangoni_convection-driven_laser_fountains_on_free_surfaces_of_liquids.pdf"
  ],
  [
    "Marangoni Convection-Driven Laser Fountains on Free Surfaces of Liquids",
    "Marangoni_convection-driven_laser_fountains_on_free_surfaces_of_liquids.pdf"
  ],
  [
    "Modeling, Patting and Driving Liquids with Light",
    "Molding_patterninganddrivingliquids_withlight.pdf"
  ],
  [
    "Flexible carbon nanotube synaptic transistor for neurological electronic skin applications",
    "flexible-carbon-nanotube-synaptic-transistor-for-neurological-electronic-skin-applications.pdf"
  ],
  [
    "Multimodal Artificial Neurological Sensory\u2013Memory System Based on Flexible Carbon Nanotube Synaptic Transistor",
    "multimodal-artificial-neurological-sensory-memory-system-based-on-flexible-carbon-nanotube-synaptic-transistor.pdf"
  ],
  [
    "TouchpadAnyWear: Textile-Integrated Tactile Sensors for Multimodal High Spatial-Resolution Touch Inputs with Motion Artifacts Tolerance",
    "TouchpadAnyWear-_Textile-Integrated_Tactile_Sensors_for_Multimodal_High_Spatial-Resolution_Touch_Inputs_with_Motion_Artifacts_Tolerance.pdf"
  ],
  [
    "Handwriting of Perovskite Optoelectronic Devices on Diverse Substrates",
    "Zhao-2023-Nature_Photonics.pdf"
  ],
  [
    "High-Speed Fabrication of All-Inkjet-Printed Organometallic Halide Perovskite Light-Emitting Diodes on Elastic Substrates",
    "Zhao_2021_Advanced_Materials.pdf"
  ],
  [
    "Rapid Drying Principle for High-speed, Pinhole-Less, Uniform Wet Deposition Protocols of Water-Dispersed 2D Materials",
    "Rapid_Drying_Principle_for_High-speed_Pinhole-Less_Uniform_Wet_Deposition_Protocols_of_Water-Dispersed_2D_Materials.pdf"
  ],
  [
    "Weavable, Reconfigurable Triboelectric Ferrofluid Fiber for Early Warning",
    "Weavable_Reconfigurable_Triboelectric_Ferrofluid_Fiber_for_Early_Warning.pdf"
  ],
  [
    "Stretchable Sponge Electrodes for Long-Term and Motion-Artifact-Tolerant Recording of High-Quality Electrophysiologic Signals",
    "Stretchable_Sponge_Electrodes_for_Long-Term_and_Motion_Artifact_Tolerant_Recording_of_High-Quality_Electrophysiologic_Signals.pdf"
  ],
  [
    "Perspectives on 2D materials for hybrid and beyond-Si image sensor applications",
    "Perspectives_on_2D_materials_for_hybrid_and_beyond-Si_image_sensor_applications.pdf"
  ]
] as const;

describe("Supplied publication PDFs", () => {
  for (const [title, filename] of hostedPapers) {
    test(`uses the supplied PDF for ${title}`, () => {
      const paper = publications.find(item => item.title === title);
      assert.ok(paper);
      const pdf = paper.links.find(link => link.label === "PDF");
      assert.ok(pdf);
      assert.ok(pdf.href.startsWith("/assets/publications/"));
      assert.equal(decodeURIComponent(pdf.href.split("/").at(-1) ?? ""), filename);
    });
  }
});
