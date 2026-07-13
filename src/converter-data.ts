import type { ConverterDataType } from './types.js'

export const ConverterData: ConverterDataType = {
  temperature: {
    label: "温度",
    units: [
      {
        name: "℃ ↔ ℉",
        from: "℃",
        to: "℉",
        scenario: "天气、体温、烤箱、泳池水温（安省烤箱默认℉）",
        formula: "℉ = ℃ × 9/5 + 32",
        AtoB: v => v * 9 / 5 + 32,
        BtoA: v => (v - 32) * 5 / 9
      }
    ]
  },

  length: {
    label: "长度",
    units: [
      {
        name: "cm ↔ inch",
        from: "cm",
        to: "inch",
        scenario: "身高、屏幕尺寸、轮胎尺寸、DIY 建材",
        formula: "inch = cm ÷ 2.54",
        AtoB: v => v / 2.54,
        BtoA: v => v * 2.54
      },
      {
        name: "m ↔ ft",
        from: "m",
        to: "ft",
        scenario: "房间层高、房屋尺寸、身高（安省常说 5'9\"）",
        formula: "ft = m ÷ 0.3048",
        AtoB: v => v / 0.3048,
        BtoA: v => v * 0.3048
      },
      {
        name: "km ↔ mile",
        from: "km",
        to: "mi",
        scenario: "跨境自驾（美国路牌用英里）",
        formula: "mi = km ÷ 1.60934",
        AtoB: v => v / 1.60934,
        BtoA: v => v * 1.60934
      }
    ]
  },

  weight: {
    label: "重量",
    units: [
      {
        name: "kg ↔ lb",
        from: "kg",
        to: "lb",
        scenario: "体重、快递、生鲜称重（安省日常用 lb）",
        formula: "lb = kg ÷ 0.45359237",
        AtoB: v => v / 0.45359237,
        BtoA: v => v * 0.45359237
      },
      {
        name: "kg ↔ oz (avdp)",
        from: "kg",
        to: "oz",
        scenario: "牛排、肉类包装（北美常用 oz 标注）",
        formula: "oz = kg × 35.274",
        AtoB: v => v * 35.274,
        BtoA: v => v / 35.274
      }
    ]
  },

  volume: {
    label: "体积",
    units: [
      {
        name: "mL ↔ oz (Imp)",
        from: "mL",
        to: "oz",
        scenario: "咖啡、饮料容量（安省咖啡常用 oz）",
        formula: "oz = mL ÷ 28.4131",
        AtoB: v => v / 28.4131,
        BtoA: v => v * 28.4131
      },
      {
        name: "L ↔ pt (Imp)",
        from: "L",
        to: "pt",
        scenario: "生啤（安省酒吧常用 Imperial Pint）",
        formula: "pt = L ÷ 0.568261",
        AtoB: v => v / 0.568261,
        BtoA: v => v * 0.568261
      },
      {
        name: "L ↔ gal (Imp)",
        from: "L",
        to: "gal",
        scenario: "油漆、牛奶、散装液体（加拿大用英制加仑）",
        formula: "gal = L ÷ 4.54609",
        AtoB: v => v / 4.54609,
        BtoA: v => v * 4.54609
      },
      {
        name: "L ↔ qt (Imp)",
        from: "L",
        to: "qt",
        scenario: "汤品、乳制品包装（英制夸脱）",
        formula: "qt = L ÷ 1.13652",
        AtoB: v => v / 1.13652,
        BtoA: v => v * 1.13652
      }
    ]
  },

  area: {
    label: "面积",
    units: [
      {
        name: "㎡ ↔ sq ft",
        from: "㎡",
        to: "sq ft",
        scenario: "租房、买房、地毯铺设（安省挂牌用 sq ft）",
        formula: "sq ft = ㎡ ÷ 0.092903",
        AtoB: v => v / 0.092903,
        BtoA: v => v * 0.092903
      },
      {
        name: "亩 ↔ acre",
        from: "亩",
        to: "acre",
        scenario: "农场、大地块（安省农村用地常用 acre）",
        formula: "acre = 亩 ÷ 6.07028",
        AtoB: v => v / 6.07028,
        BtoA: v => v * 6.07028
      }
    ]
  },

  speed: {
    label: "速度",
    units: [
      {
        name: "km/h ↔ mph",
        from: "km/h",
        to: "mph",
        scenario: "车速（安省用 km/h，美国用 mph）",
        formula: "mph = km/h ÷ 1.60934",
        AtoB: v => v / 1.60934,
        BtoA: v => v * 1.60934
      }
    ]
  },

  pressure: {
    label: "压力",
    units: [
      {
        name: "kPa ↔ PSI",
        from: "kPa",
        to: "PSI",
        scenario: "轮胎胎压（安省修车店只认 PSI）",
        formula: "PSI = kPa ÷ 6.89476",
        AtoB: v => v / 6.89476,
        BtoA: v => v * 6.89476
      }
    ]
  },

  fuel: {
    label: "油耗",
    units: [
      {
        name: "L/100km ↔ mpg (Imp)",
        from: "L/100km",
        to: "mpg",
        scenario: "汽车油耗（加拿大用 L/100km，英国用 mpg）",
        formula: "mpg = 282.481 / L100km",
        AtoB: v => 282.481 / v,
        BtoA: v => 282.481 / v
      }
    ]
  },

  power: {
    label: "功率",
    units: [
      {
        name: "kW ↔ hp (Imp)",
        from: "kW",
        to: "hp",
        scenario: "汽车马力（安省常用英制马力 hp）",
        formula: "hp = kW ÷ 0.7457",
        AtoB: v => v / 0.7457,
        BtoA: v => v * 0.7457
      }
    ]
  },

  energy: {
    label: "能耗",
    units: [
      {
        name: "kWh ↔ ft³·therm",
        from: "kWh",
        to: "ft³",
        scenario: "天然气账单（安省按立方英尺计）",
        formula: "ft³ = kWh × 3.41214 ÷ 1.037",
        AtoB: v => v * 3.41214 / 1.037,
        BtoA: v => v * 1.037 / 3.41214
      }
    ]
  },

  clothing: {
    label: "服装",
    units: [
      {
        name: "CN码 ↔ US码 (上衣)",
        from: "CN",
        to: "US",
        scenario: "网购衣服（安省通用 US 码）",
        formula: "US = CN - 2（近似）",
        AtoB: v => v - 2,
        BtoA: v => v + 2
      }
    ]
  }
};