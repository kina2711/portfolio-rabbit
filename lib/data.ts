// lib/data.ts

export const DATA = {
  en: {
    nav: {
      contact: "Contact Me",
      download: "Download CV",
      toc: {
        title: "Navigation",
        items: [
          { id: "hero", label: "Home" },
          { id: "about", label: "About Me" },
          { id: "experience", label: "Work Experience" },
          { id: "skills", label: "Skills" },
          { id: "projects", label: "Projects" },
          { id: "education", label: "Education" },
        ]
      }
    },
    hero: {
      title: "Hi, I'm Thai Trung Kien",
      role: "Data Analyst & Analytics Engineer",
      desc: "A <strong>HYBRID DATA PROFESSIONAL</strong> with a <em>rigorous systems-thinking approach</em> derived from a pharmacy background, I serve as a <em>strategic conduit</em> between complex technical infrastructure and sustainable business growth. By <em>orchestrating real-time streaming architectures</em> with <strong>Kafka</strong>, <strong>Debezium</strong>, and <strong>Spark</strong> on <strong>Kubernetes</strong> to <em>eliminate data latency</em>, and unifying fragmented datasets via <strong>dbt</strong> and <strong>PostgreSQL</strong> into a <em>'Single Source of Truth'</em>, I establish a <em>high-integrity foundation</em> for enterprise analytics. Leveraging this infrastructure, I translate raw data into <em>strategic assets</em> through <em>Business Intelligence</em> tools like <strong>Tableau</strong> and <strong>Metabase</strong>, delivering <em>high-impact, data-driven insights</em>—ranging from <strong>RFM segmentation</strong> to <strong>sentiment analysis</strong>—that <em>steer executive decision-making</em>. This <em>holistic end-to-end methodology</em> has enabled me to drive <em>measurable operational efficiencies</em>, most notably <strong>reducing manual workloads by 90%</strong> while simultaneously <strong>boosting conversion rates by 17%</strong> and <strong>customer retention by 15%</strong>.",
    },
    about: {
      title: "About Me",
      slogan: "Turning raw data into actionable insights",
      desc: "Detail-oriented Data Analyst with over 1 year of experience in Healthcare and Marketing Analytics. Skilled in SQL, Python, and Data Visualization (Looker Studio/Power BI), I specialize in transforming raw data into actionable insights that drive platform performance and operational efficiency. With a Pharmacy degree providing deep domain understanding, I am now expanding my technical skillset into Data Engineering (ETL, BigQuery, Airflow) to build scalable data solutions. Eager to leverage this unique blend of analytical rigor and emerging engineering skills to contribute to a data-driven HealthTech environment. Additionally, I aim to expand my analytical scope to diverse fields such as Banking, HR, and Digital Marketing.",
      cards: {
        bg: {
          title: "Domain Expertise",
          desc: "Deep roots in Healthcare & Pharma (HUP graduate). Successfully expanded analytical capabilities into Marketing, Finance (Banking), and HR operations.",
        },
        tech: {
          title: "Technical Strength",
          desc: "Full-stack Analytics capability: From Data Ingestion (Crawling/ETL) -> Storage (BigQuery/SQL) -> Analysis (Python) -> Visualization (Power BI/Looker).",
        },
        goal: {
          title: "Future Goals",
          desc: "To become a Senior Analytics Engineer capable of architecting scalable data systems that solve complex business problems across multiple industries.",
        },
      },
    },
    experience: {
      title: "Work Experience",
      desc: "A journey of creating impact through data.",
      jobs: [
        {
          title: "Analytics Engineer",
          company: "Mevis Healthcare",
          period: "Sep 2025 – Nov 2025",
          location: "Hanoi - Vietnam, Vinh Phuc - Vietnam",
          image: "/experiences/mevis-healthcare.png",
          description: [
            "Refactored core ETL Pipelines for high-velocity data integration, reducing data preparation time by 75% and ensuring 99% data availability.",
            "Engineered the data infrastructure for a High-Concurrency User Portal, facilitating real-time data access for thousands of users.",
            "Deployed advanced BI dashboards on Looker Studio to convert raw operational logs into actionable strategic insights for leadership.",
          ],
        },
        {
          title: "Data Analyst",
          company: "Phuong Dong General Hospital",
          period: "Jan 2025 – Jul 2025",
          location: "Hanoi - Vietnam",
          image: "/experiences/bvpd.png",
          description: [
            "Analyzed User Lifecycle and Omnichannel data for the Marketing team, identifying key touchpoints that elevated marketing efficiency by 17%.",
            "Established a Google BigQuery data warehouse system, optimizing data storage and enhancing query speed by 52%, enabling real-time reporting for 15+ stakeholders.",
            "Designed Looker dashboards to monitor KPIs (Traffic, Conversion, Revenue), directly supporting strategic decisions that reduced operational costs by 10%.",
            "Deployed automated customer care workflows using data triggers, cutting manual operation time by 15% and increasing Customer Satisfaction (CSAT) by 10%.",
            "Automated extraction of YouTube analytics via n8n, integrating outputs into Google Sheets and Looker Studio.",
          ],
        },
        {
          title: "BI Developer & Trainer",
          company: "ComeEco Company (Freelance)",
          period: "May 2025 – July 2025",
          location: "Remote",
          image: "/experiences/come-eco.png",
          description: [
            "Built a streamlined Power BI financial reporting solution: designed data models, created interactive dashboards, and automated report delivery.",
            "Equipped the CEO and leadership with real-time insights and forward-looking projections.",
            "Delivered 'Excel for Data Analysts' training to staff: crafted hands-on modules on advanced formulas, PivotTables and visualization.",
          ],
        },
        {
          title: "Administrator",
          company: "Xom Data Community",
          period: "Apr 2025 – Present",
          location: "Community",
          image: "/experiences/xom-data.png",
          description: [
            "Founded and scaled a Data Community from 0 to 20,000 members in 70 days using Data-driven Content Strategy.",
            "Created content series on data overviews and practical SQL applications in healthcare, enhancing engagement and knowledge sharing.",
          ],
        },
      ],
    },
    skills: {
      title: "Skills & Expertise",
      desc: "A holistic skillset spanning Domain Knowledge, Technical Proficiency, and Leadership.",
      tabs: ["Domain Knowledge", "Technical Skills", "Soft Skills"],
      domain: [
        { name: "Healthcare & Pharma", icon: "/skills/healthcare.svg", desc: "Patient Flow, RCM, EHR Analysis, GMP principles (HUP Degree)." },
        { name: "Marketing Analytics", icon: "/skills/marketing.svg", desc: "Omnichannel Performance, ROI/ROAS, Customer Journey, SEO." },
        { name: "Digital & Platform", icon: "/skills/digital-platform.svg", desc: "Traffic Analysis, User Engagement, App Performance, GA4." },
        { name: "Business Operations", icon: "/skills/business-operation.svg", desc: "Process Optimization, Automating Reporting Workflows, KPI Monitoring." },
      ],
      technical: [
        {
          title: "Business Intelligence",
          tools: [
            { name: "Power BI", icon: "/skills/Power_BI.svg", desc: "DAX, Data Modeling, RLS, Power Query, Report Server." },
            { name: "Looker Studio", icon: "/skills/looker-studio.svg", desc: "Interactive Dashboards, Data Blending, Calculated Fields." },
            { name: "Tableau", icon: "/skills/tableau.svg", desc: "LOD Expressions, Parameters, Storytelling." }
          ]
        },
        {
          title: "Data Warehousing & Database",
          tools: [
            { name: "BigQuery", icon: "/skills/bigquery.svg", desc: "Partitioning, Clustering, Nested Data, GIS." },
            { name: "PostgreSQL", icon: "/skills/postgresql.svg", desc: "Stored Procedures, Triggers, Indexing, JSONB." },
            { name: "SQL Server", icon: "/skills/mssql.svg", desc: "T-SQL, SSIS, SSAS, Performance Tuning." }
          ]
        },
        {
          title: "Data Engineering & ETL",
          tools: [
            { name: "Apache Airflow", icon: "/skills/airflow.svg", desc: "DAGs, Operators, XComs, TaskFlow API." },
            { name: "Apache Spark", icon: "/skills/spark.svg", desc: "Distributed Processing, PySpark, Databricks, Optimization." },
            { name: "Apache Kafka", icon: "/skills/kafka.svg", desc: "Real-time Streaming, Pub/Sub, Event Driven Architecture." },
            { name: "Python", icon: "/skills/python.svg", desc: "Pandas, NumPy, SQLAlchemy, OOP, PySpark." },
            { name: "dbt", icon: "/skills/dbt.svg", desc: "Data Transformation, Testing, Documentation, Jinja." },
            { name: "n8n", icon: "/skills/n8n.svg", desc: "Workflow Automation, Webhooks, API Integration." }
          ]
        },
        {
          title: "DevOps & Tools",
          tools: [
            { name: "Docker", icon: "/skills/docker.svg", desc: "Containerization, Docker Compose, Multi-stage builds." },
            { name: "GitHub", icon: "/skills/github.svg", desc: "Version Control, Actions, Branching Strategies." },
            { name: "Jira", icon: "/skills/jira.svg", desc: "Agile, Scrum, Sprint Planning, Task Management." }
          ]
        }
      ],
      soft: [
        { name: "Data Storytelling", icon: "/skills/data-storytelling.svg", desc: "Proven ability to translate complex datasets into actionable insights for non-tech stakeholders." },
        { name: "Leadership", icon: "/skills/leadership.svg", desc: "Founder/Admin of 'Xom Data' (20,000+ members) – Demonstrated strong sense of responsibility." },
        { name: "Detail-Oriented", icon: "/skills/detail-oriented.svg", desc: "Experience handling sensitive Healthcare/Medical data, ensuring 99% data integrity." },
        { name: "Growth Mindset", icon: "/skills/growth-mindset.svg", desc: "Thrives in fast-paced environments, self-taught new technologies (Airflow, Docker)." },
        { name: "Critical Thinking", icon: "/skills/critical-thinking.svg", desc: "Ability to approach problems from both business and technical perspectives." }
      ]
    },
    projects: {
      title: "Featured Projects",
      desc: "Comprehensive portfolio covering Healthcare, Marketing, Banking, Game and Data Engineering.",
      list: [
        {
          slug: "vpi-hospital-reporting",
          title: "VPI Hospital Reporting Automation (ETL Project)",
          tags: ["Healthcare", "Marketing", "Data Engineering", "Python"],
          link: "https://github.com/kina2711/vpi_etl_pipeline",
          objective: "Architect a robust ETL pipeline to synchronize high-volume hospital data from PostgreSQL to Google Sheets/BI.",
          description: "Designed a configuration-driven ETL pipeline with smart batch processing. Automated 4 critical daily reports and engineered retry mechanisms for reliability.",
          metrics: "Reduced manual data prep time by 90% (15 hours/week). Achieved 99% pipeline reliability.",
          
          // --- CHI TIẾT ---
          details: {
            problem: {
              title: "The Challenge",
              content: "The Marketing team at VPI Hospital was facing a 'data fragmentation' crisis. Critical patient data was siloed across a legacy PostgreSQL database and over 20 disparate Google Sheets files manually updated by different departments. The team spent 15 hours every week just copy-pasting data to merge these sources. This manual process was prone to human error, resulting in delayed reports and unreliable metrics for the Board of Directors."
            },
            tools: {
              title: "Tech Stack & Tools",
              items: ["Python (Pandas, SQLAlchemy)", "Apache Airflow (Orchestration)", "PostgreSQL (Data Warehouse)", "Google Sheets API", "Looker Studio"]
            },
            process: {
              title: "The Process",
              steps: [
                "Architecture Design: I moved away from hard-coded scripts to a 'Configuration-Driven' architecture. This means new report sources can be added simply by updating a JSON config file, without rewriting the core code.",
                "Data Ingestion (Extract): Built Python connectors to fetch raw data from PostgreSQL and Google Sheets API. Implemented 'Smart Batch Processing' to handle large datasets without crashing memory.",
                "Transformation & Cleaning: Utilized Pandas to standardize date formats, handle missing values (Null imputation), and deduplicate records based on patient IDs.",
                "Automation & Loading: Set up Airflow DAGs to trigger the pipeline automatically at 6:00 AM daily. Engineered a 'Retry Mechanism' that automatically re-runs the task if the database connection drops, ensuring 99% uptime."
              ]
            },
            result: {
              title: "Impact & Results",
              content: "The pipeline completely eliminated manual data preparation. The Marketing team reclaimed 15 hours per week, shifting their focus from 'Data Entry' to 'Data Analysis'. The automated Dashboard on Looker Studio now provides real-time insights every morning with 99% data accuracy, enabling faster decision-making for hospital campaigns."
            }
          }
        },
        {
          slug: "vpi-health-booking",
          title: "VPI Health - Patient Care & Booking Platform",
          tags: ["Healthcare", "Product", "Database Design", "Next.js"],
          link: "https://github.com/kina2711/vpi-health",
          objective: "Develop a booking platform to streamline patient care and ensure high-quality data collection at the source.",
          description: "Built the frontend and data structure for a patient booking system, ensuring smooth user experience and accurate data capture for analytics.",
          metrics: "Reduced booking processing time by 40%. Achieved 100% data accuracy for patient inputs.",
          
          // --- CHI TIẾT ---
          details: {
            problem: {
              title: "The Challenge",
              content: "The hospital's traditional booking process relied heavily on a hotline and manual Excel entry by receptionists. This created two major issues: 1) The phone lines were constantly overloaded, leading to lost patients. 2) Manual data entry resulted in 'Dirty Data' (typos in phone numbers, duplicate patient records, non-standardized addresses), making it impossible for the Data Team to analyze patient demographics or marketing ROI effectively."
            },
            tools: {
              title: "Tech Stack & Tools",
              items: ["Next.js (Frontend Framework)", "Tailwind CSS (UI/UX)", "PostgreSQL (Relational Database)", "React Hook Form (Data Validation)", "Supabase (Backend as a Service)"]
            },
            process: {
              title: "The Process",
              steps: [
                "Database Schema Design: Designed a normalized SQL schema (Patients, Appointments, Doctors, Departments) to ensure data integrity and prevent duplication.",
                "UI/UX & Validation: Built a user-friendly interface with strict input validation (Regex for phone numbers, Date pickers) to force clean data entry from the user side.",
                "Workflow Optimization: Automated the flow from 'Booking Request' -> 'Confirmation SMS' -> 'Database Entry', removing the need for manual receptionist intervention.",
                "Analytics Integration: Structured the data to be easily queryable for future reports (e.g., Peak booking hours, Conversion rate by department)."
              ]
            },
            result: {
              title: "Impact & Results",
              content: "The platform transformed the booking operation. Workload for receptionists dropped by 40%, allowing them to focus on in-person patient care. Most importantly for Analytics: Data cleanliness improved to 100% at the source, enabling accurate reporting on patient trends without spending hours cleaning Excel files."
            }
          }
        },
        {
          slug: "tiktok-data-scraping",
          title: "TikTok Trend Analysis & Scraping",
          tags: ["Marketing", "Data Crawling", "Python", "Selenium", "Looker Studio"],
          link: "https://github.com/kina2711/scrape_tiktok",
          objective: "Automate the extraction of TikTok data to identify viral trends and inform content strategy.",
          description: "Developed a Python-based scraper using Selenium to collect video metrics (Views, Likes, Hashtags), cleaned the data with Pandas, and visualized trends on Looker Studio.",
          metrics: "Boosted audience engagement by 12%. Reduced manual research effort by 50%.",
          
          // --- CHI TIẾT ---
          details: {
            problem: {
              title: "The Challenge",
              content: "Identifying viral trends on TikTok relied heavily on subjective 'gut feeling' and manual scrolling. The Marketing team lacked concrete data on which hashtags, music, or video durations were actually driving engagement, leading to hit-or-miss content strategies. Manual data collection was tedious, slow, and unable to keep up with the platform's fast pace."
            },
            tools: {
              title: "Tech Stack & Tools",
              items: ["Python (Core Logic)", "Selenium (Web Automation)", "Pandas (Data Cleaning)", "Regular Expressions (Text Processing)", "Looker Studio (Dashboard)"]
            },
            process: {
              title: "The Process",
              steps: [
                "Bot Development: Built a Python script using Selenium to simulate user interaction (auto-login, infinite scrolling) to bypass basic anti-scraping measures.",
                "Data Extraction: Extracted key metrics (Views, Likes, Shares, Comments), Video Duration, and Hashtags from hundreds of videos in specific niches.",
                "Data Cleaning: Utilized Pandas and Regex to clean messy web data (e.g., converting '1.2M' views to integers, removing emojis from captions, handling missing values).",
                "Visualization: Connected the processed CSV data to Looker Studio to create a dynamic dashboard tracking 'Top Trending Hashtags' and 'Optimal Video Duration'."
              ]
            },
            result: {
              title: "Impact & Results",
              content: "Transformed the content strategy from 'Guesswork' to 'Data-Driven'. The team successfully identified high-performing niche hashtags, boosting overall audience engagement by 12% within the first month. The automated bot saved approximately 10 hours of manual research work per week (50% reduction in effort)."
            }
          }
        },
        {
          slug: "customer-rfm-segmentation",
          title: "Customer 360: RFM Segmentation & Strategy",
          tags: ["Marketing", "Analytics", "SQL", "Power BI", "RFM"],
          link: "https://github.com/kina2711/customer_360",
          objective: "Segment customers using the RFM model (Recency, Frequency, Monetary) to enhance retention and personalize marketing campaigns.",
          description: "Analyzed transaction data to segment customers into actionable groups (Champions, At Risk, Hibernating) and developed targeted strategies for each.",
          metrics: "Increased retention by 15% and reduced churn in high-risk segments by 20%.",
          
          // --- CHI TIẾT ---
          details: {
            problem: {
              title: "The Challenge",
              content: "The company was using a 'Mass Marketing' approach, sending the exact same promotional emails to everyone—from loyal VIPs to customers who hadn't purchased in a year. This resulted in low open rates, wasted budget, and annoyed customers. The marketing team needed a way to identify *who* to target and *when*, but they lacked a framework to classify their user base based on actual buying behavior."
            },
            tools: {
              title: "Tech Stack & Tools",
              items: ["SQL (Window Functions, CTEs)", "Power BI (Dashboarding)", "Python (Clustering/K-Means - Optional)", "RFM Analysis Framework"]
            },
            process: {
              title: "The Process",
              steps: [
                "Data Preparation: Extracted 2 years of transaction history using SQL. Cleaned the data by handling returns/refunds and removing outliers (negative values).",
                "RFM Calculation: Calculated three key metrics for every single user: Recency (days since last buy), Frequency (total count of orders), and Monetary (total spend).",
                "Scoring & Segmentation: Ranked users on a scale of 1-5 for each metric. Combined these scores to group customers into 10 distinct segments (e.g., 'Champions', 'Loyal', 'Can't Lose Them', 'Hibernating').",
                "Strategy Formulation: Translated these segments into business actions. Example: 'Champions' get early access to new products; 'At Risk' users get a win-back discount."
              ]
            },
            result: {
              title: "Impact & Results",
              content: "The segmentation model successfully moved the company from 'Mass Marketing' to 'Targeted Marketing'. By tailoring messages to specific groups, we achieved a 15% increase in overall Customer Retention Rate. Specifically, the 'Win-back' campaign targeting the 'At Risk' segment successfully reactivated 20% of churning customers who were previously ignored."
            }
          }
        },
        {
          slug: "fpt-customer-sentiment",
          title: "FPT Customer Sentiment Analysis (NLP)",
          tags: ["Marketing", "NLP", "Machine Learning", "Python"],
          link: "https://github.com/kina2711/customer_sentiment_analysis",
          objective: "Analyze thousands of customer reviews to measure sentiment polarity and identify root causes of dissatisfaction.",
          description: "Applied NLP techniques to extract sentiment from unstructured text, classified reviews using ML models, and visualized key pain points.",
          metrics: "Improved Customer Satisfaction (CSAT) by 25%. Reduced complaint resolution time by 30%.",
          
          // --- CHI TIẾT ---
          details: {
            problem: {
              title: "The Challenge",
              content: "FPT Telecom receives thousands of customer comments and reviews daily across social media and app stores. Manually reading these to gauge brand health was impossible. The Customer Service team knew *that* customers were unhappy (low star ratings), but they didn't know *why* (Internet speed? Customer support attitude? Pricing?). They needed an automated way to 'listen' to the voice of the customer at scale."
            },
            tools: {
              title: "Tech Stack & Tools",
              items: ["Python (NLTK, Scikit-learn)", "TF-IDF (Feature Extraction)", "Logistic Regression (Classification Model)", "Pandas & Seaborn (Visualization)", "WordCloud"]
            },
            process: {
              title: "The Process",
              steps: [
                "Data Preprocessing: Cleaned unstructured Vietnamese text data by removing stopwords, special characters, and emojis. Performed tokenization to prepare text for the model.",
                "Feature Engineering: Converted text into numerical vectors using TF-IDF (Term Frequency-Inverse Document Frequency) to reflect the importance of words.",
                "Model Training: Trained and compared multiple Machine Learning models (Naive Bayes, Logistic Regression). Achieved 85% accuracy in classifying reviews as Positive, Negative, or Neutral.",
                "Insight Extraction: Used WordClouds to visualize the most frequent terms associated with 'Negative' sentiment (e.g., 'mạng lag', 'rớt mạng', 'tổng đài')."
              ]
            },
            result: {
              title: "Impact & Results",
              content: "The model automatically flagged negative reviews in real-time, allowing the support team to prioritize urgent cases. By identifying that 60% of complaints came from a specific infrastructure issue in District 9, the technical team fixed the root cause, leading to a 25% increase in CSAT scores and a 30% reduction in complaint resolution time."
            }
          }
        },
        {
          slug: "mobile-game-analytics",
          title: "Gamelytics: Mobile Game Lifecycle Analysis",
          tags: ["Game", "BigQuery", "Python", "Tableau"],
          link: "https://github.com/kina2711/game-lifecycle-analytics",
          objective: "Analyze 1M+ event logs to solve retention crisis and optimize monetization.",
          description: "Built a scalable ETL pipeline using BigQuery and Python to analyze user behavior, identifying a critical 95% churn point at Level 10.",
          metrics: "Recovered ~$50k in potential revenue. Boosted D1 Retention by 15%.",
          
          // --- CHI TIẾT ---
          details: {
            problem: {
              title: "The Challenge",
              content: "Following a successful soft launch, our mobile RPG title generated over 1 million event logs but faced a critical retention crisis. While User Acquisition (UA) was strong, the Day 3 Retention rate plummeted unexpectedly. The product team was flying blind: Was it a technical crash? A boring tutorial? Or a difficulty spike? We needed to find the 'leaky bucket' in the user journey immediately."
            },
            tools: {
              title: "Tech Stack & Tools",
              items: ["Google BigQuery (Data Warehousing)", "SQL (Advanced Queries)", "Python (Pandas/Matplotlib)", "Tableau (Visualization)", "Firebase Analytics"]
            },
            process: {
              title: "The Process",
              steps: [
                "Data Ingestion: Architected an ETL pipeline to move raw event logs from Firebase to BigQuery to handle high-volume data (1M+ rows) efficiently.",
                "Data Cleaning: Used SQL to filter out bot traffic, dev devices, and 'bounce' sessions (users active < 5 seconds) to ensure analysis integrity.",
                "Funnel Analysis: Mapped the user journey from [Install] -> [Tutorial Complete] -> [Level 1] ... -> [Level 20]. This visualization was key to spotting the exact drop-off step.",
                "Behavioral Segmentation: Segmented users into 'Whales' (High Spenders) vs. 'F2P' (Free-to-Play) to understand what behavioral patterns led to the first purchase."
              ]
            },
            result: {
              title: "Results & Impact",
              content: "The analysis revealed a massive 'death valley' at Level 10, where 95% of non-paying users churned due to an abrupt difficulty spike. By recommending a difficulty adjustment and a targeted 'Starter Pack' gift at Level 9, we improved Day 1 Retention by 15%. This optimization is estimated to recover $50,000 in potential annual revenue."
            }
          }
        },
        {
          slug: "job-listings-scraper",
          title: "Job Market Automated Scraper",
          tags: ["Data Crawling", "Automation", "Python", "Selenium"],
          link: "https://github.com/kina2711/scrape_job_using_python",
          objective: "Automate the collection of job market data to analyze demand trends.",
          description: "Developed a Python script to scrape thousands of job descriptions, titles, and requirements from major job boards for market analysis.",
          metrics: "Collected 1,000+ job postings/hour. Reduced manual research time by 95%.",
          
          details: {
            problem: {
              title: "The Challenge",
              content: "Understanding labor market trends requires analyzing thousands of job postings. Doing this manually (visiting websites, copying text, pasting to Excel) is incredibly slow and prone to errors. I needed a way to build a large-scale dataset of job requirements to identify the most in-demand data skills."
            },
            tools: {
              title: "Tech Stack",
              items: ["Python", "Selenium (Browser Automation)", "BeautifulSoup (HTML Parsing)", "Pandas", "CSV"]
            },
            process: {
              title: "The Process",
              steps: [
                "Bot Setup: Configured Selenium to automate browser navigation, handling pagination and dynamic content loading.",
                "Targeting: Defined specific CSS selectors to extract Job Title, Company, Salary, and Description accurately.",
                "Extraction Loop: The script iterates through pages, scrapes data, and handles exceptions (e.g., pop-ups, slow loading).",
                "Storage: Data is cleaned and exported to structured CSV files for further analysis."
              ]
            },
            result: {
              title: "Impact & Results",
              content: "Built a dataset of over 1,000 job postings in under an hour (a task that would take days manually). The analysis revealed that 'SQL' and 'Python' appeared in 80% of Data Analyst JD, helping me prioritize my learning path."
            }
          }
        },
        {
          slug: "banking-credit-segmentation",
          title: "Banking Credit Risk Segmentation",
          tags: ["Banking", "Risk Analytics", "Clustering", "Python"],
          link: "https://github.com/kina2711/Banking_Credit_Segment_Exploration",
          objective: "Analyze credit card usage data to identify distinct customer segments for risk assessment.",
          description: "Explored credit usage patterns using K-Means clustering to group customers, aiding in risk stratification.",
          metrics: "Identified 4 key risk profiles. Improved targeting precision by 20%.",
          
          details: {
            problem: {
              title: "The Challenge",
              content: "The bank faced rising default rates but applied a 'one-size-fits-all' credit policy. They couldn't distinguish between high-spending VIPs and high-risk over-spenders. The goal was to find hidden patterns in credit usage to treat these groups differently."
            },
            tools: {
              title: "Tech Stack",
              items: ["Python", "Scikit-learn (K-Means)", "Pandas", "Matplotlib/Seaborn", "Dimensionality Reduction (PCA)"]
            },
            process: {
              title: "The Process",
              steps: [
                "EDA & Preprocessing: Handled missing values and scaled features (Balance, Cash Advance, Credit Limit) to ensure equal weight in clustering.",
                "Clustering: Applied K-Means algorithm. Used the 'Elbow Method' to determine the optimal number of clusters (k=4).",
                "Profiling: Analyzed each cluster's characteristics. E.g., Cluster 1: High balance, low purchase (Risk). Cluster 2: High purchase, full payment (VIP)."
              ]
            },
            result: {
              title: "Impact & Results",
              content: "Identified 4 distinct customer personas. The Risk Team used these profiles to tighten credit limits for the 'High Risk' cluster while the Marketing Team targeted the 'VIP' cluster with premium card offers."
            }
          }
        },
        {
          slug: "hr-analytics-attrition",
          title: "HR Analytics: Employee Attrition",
          tags: ["HR", "People Analytics", "Power BI", "Python"],
          link: "https://github.com/kina2711/HR_analytics_project",
          objective: "Analyze employee data to understand turnover drivers and improve retention.",
          description: "Visualized HR metrics to identify departments with high attrition and correlated factors like salary and overtime.",
          metrics: "Identified Sales dept has highest churn (30%). Provided actionable retention insights.",
          
          details: {
            problem: {
              title: "The Challenge",
              content: "The company was experiencing a high turnover rate, leading to increased recruitment costs and lost productivity. HR needed to move from reactive 'exit interviews' to proactive data analysis to understand WHY people were leaving."
            },
            tools: {
              title: "Tech Stack",
              items: ["Power BI (Interactive Dashboard)", "Python (Correlation Analysis)", "Excel (Data Source)"]
            },
            process: {
              title: "The Process",
              steps: [
                "Data Cleaning: Standardized employee records, handled missing values, and calculated tenure.",
                "Exploratory Analysis: Broke down attrition by Department, Age, Gender, and Job Role.",
                "Correlation Analysis: Investigated the relationship between Attrition and factors like 'Distance from Home', 'Overtime', and 'Years since last promotion'.",
                "Visualization: Built a Power BI dashboard for HR Business Partners to monitor team health."
              ]
            },
            result: {
              title: "Impact & Results",
              content: "Revealed that 'Lack of Promotion' and 'Overtime' were the top predictors of churn, specifically in the Sales department (30% churn rate). HR used this insight to revise the promotion policy and hire support staff to reduce overtime load."
            }
          }
        },
        {
          slug: "bank-deposit-segmentation",
          title: "Bank Deposit Segmentation Strategy",
          tags: ["Banking", "Marketing", "Segmentation", "Python"],
          link: "https://github.com/kina2711/Bank_Deposit_Segmentation_Analysis",
          objective: "Segment deposit customers to optimize cross-selling strategies and increase capital.",
          description: "Analyzed deposit behaviors (Term vs. Demand) to create profiles for targeted marketing campaigns.",
          metrics: "Enhanced targeting precision. Identified untapped potential in the 'Young Savers' segment.",
          
          details: {
            problem: {
              title: "The Challenge",
              content: "The bank needed to increase its deposit volume (cheap capital source). However, marketing campaigns for Term Deposits had very low conversion rates because they were targeting everyone, including customers who preferred liquidity over interest."
            },
            tools: {
              title: "Tech Stack",
              items: ["Python", "Pandas", "Matplotlib", "Descriptive Statistics"]
            },
            process: {
              title: "The Process",
              steps: [
                "Data Analysis: Examined customer demographics (Age, Job, Marital Status) against deposit types (Term Deposit vs. Demand Deposit).",
                "Segmentation: Grouped customers based on saving behavior. e.g., 'Retirees' (High balance, long term) vs. 'Students' (Low balance, high liquidity).",
                "Insight Generation: Found that 'Blue-collar' workers had the highest potential for short-term deposits but were rarely targeted."
              ]
            },
            result: {
              title: "Impact & Results",
              content: "Created tailored campaigns for each segment. The campaign targeting 'Blue-collar' workers with flexible short-term savings products saw a 2x increase in conversion rate compared to the generic campaign."
            }
          }
        },
        {
          slug: "banking-payment-segmentation",
          title: "Payment Account Usage Analysis",
          tags: ["Banking", "Product", "SQL", "Behavioral Analysis"],
          link: "https://github.com/kina2711/Banking_Payment_Account_Segmentation",
          objective: "Understand usage patterns of payment accounts to improve product features and fee structures.",
          description: "Grouped users based on transaction frequency and volume to tailor account packages.",
          metrics: "Informed product roadmap. Designed new 'Zero-Fee' packages for high-frequency users.",
          
          details: {
            problem: {
              title: "The Challenge",
              content: "Competition in the payment sector is fierce. Customers were leaving for Fintech apps because the bank's fee structure was rigid. The Product Team needed to understand who their 'Power Users' were to design better loyalty programs and stop the churn."
            },
            tools: {
              title: "Tech Stack",
              items: ["SQL (Aggregation, Case Statements)", "Python", "Data Visualization"]
            },
            process: {
              title: "The Process",
              steps: [
                "Transaction Profiling: Analyzed transaction logs (transfers, bill payments, QR scan) over a 6-month period.",
                "Metric Calculation: Calculated Average Daily Transactions and Average Monthly Volume per user.",
                "Grouping: Identified 'Active Transactors' (High freq, low volume) vs. 'High Value Transactors' (Low freq, high volume)."
              ]
            },
            result: {
              title: "Impact & Results",
              content: "Insights led to the launch of a 'Zero-Fee' account package for customers who maintain a minimum balance or perform 10+ transactions/month. This strategy successfully retained 85% of the 'Power User' segment."
            }
          }
        },
        {
          slug: "banking-intelligence-dashboard",
          title: "Banking Intelligence Dashboard",
          tags: ["Banking", "BI", "Power BI", "Data Modeling"],
          link: "https://github.com/kina2711/Banking-Intelligence",
          objective: "Create a centralized BI solution to monitor branch performance and KPI tracking.",
          description: "Integrated multiple banking data sources into a unified dashboard for executive overview.",
          metrics: "Streamlined reporting for 50+ branch managers. Reduced reporting time by 70%.",
          
          details: {
            problem: {
              title: "The Challenge",
              content: "Branch managers were struggling with fragmented reports. Sales data came from one system, loan data from another, and customer satisfaction from a third. Creating a weekly performance report took 2 days of manual Excel work."
            },
            tools: {
              title: "Tech Stack",
              items: ["Power BI (DAX, Power Query)", "SQL Server", "Star Schema Modeling"]
            },
            process: {
              title: "The Process",
              steps: [
                "Data Integration: Connected Power BI to the Data Warehouse SQL Server.",
                "Data Modeling: Built a Star Schema model (Fact Tables: Transactions, Loans; Dimension Tables: Branch, Time, Customer) for optimal performance.",
                "Metric Definition: Created complex DAX measures for 'Loan to Deposit Ratio' (LDR) and 'Net Interest Margin' (NIM).",
                "UI Design: Designed an executive dashboard with drill-down capabilities from Region -> Branch -> Relationship Manager."
              ]
            },
            result: {
              title: "Impact & Results",
              content: "Delivered a 'Single Source of Truth' dashboard accessible to all Branch Managers. Reporting time reduced from 2 days to near real-time. Executives can now spot underperforming branches instantly."
            }
          }
        },
        {
          slug: "seo-analytics-project",
          title: "SEO Performance Analytics",
          tags: ["Marketing", "SEO", "Google Search Console", "Python"],
          link: "https://github.com/kina2711/SEO_Analytics_Project",
          objective: "Analyze website traffic and keyword performance to improve organic search rankings.",
          description: "Processed Google Search Console data to identify high-potential keywords and content gaps.",
          metrics: "Identified 'Low Hanging Fruit' keywords. Recommended strategy boosted organic traffic by 10%.",
          
          details: {
            problem: {
              title: "The Challenge",
              content: "The website had good content but wasn't ranking on Page 1 for key terms. The marketing team needed to know which keywords were 'close to winning' (ranking 11-20) to focus their optimization efforts, rather than shooting in the dark."
            },
            tools: {
              title: "Tech Stack",
              items: ["Google Search Console API", "Python (Pandas)", "Data Visualization", "Keyword Clustering"]
            },
            process: {
              title: "The Process",
              steps: [
                "Data Extraction: Used Python to fetch search performance data (Clicks, Impressions, CTR, Position) from GSC.",
                "Opportunity Analysis: Filtered for 'Low Hanging Fruits' - keywords with high impressions, decent CTR, but ranking between position 10 and 20.",
                "Content Gap: Identified topics where competitors were ranking but we had no content."
              ]
            },
            result: {
              title: "Impact & Results",
              content: "Provided a list of 50+ priority keywords to optimize. By updating existing articles with these terms, the website saw a 10% increase in organic traffic and several keywords moved to Page 1 within 2 months."
            }
          }
        },
        {
          slug: "ai-agent-automation",
          title: "Automated YouTube Metrics with AI Agent",
          tags: ["Automation", "n8n", "AI Agent", "API"],
          link: "https://github.com/kina2711/ai_agent_with_n8n",
          objective: "Automate the tracking of YouTube channel performance using AI agents and low-code workflows.",
          description: "Built an n8n workflow to auto-fetch video metrics, use AI to summarize performance, and update reports without manual intervention.",
          metrics: "Saved 5 hours/week on manual data entry. automated weekly insights.",
          
          details: {
            problem: {
              title: "The Challenge",
              content: "Tracking YouTube analytics manually involves opening the dashboard, copying numbers for each video (Views, Subs, Revenue), and pasting them into a spreadsheet. It's repetitive, boring, and doesn't provide instant insights on *why* a video performed well."
            },
            tools: {
              title: "Tech Stack",
              items: ["n8n (Workflow Automation)", "YouTube Data API", "OpenAI/Gemini API (AI Analysis)", "Google Sheets", "Telegram/Slack (Notifications)"]
            },
            process: {
              title: "The Process",
              steps: [
                "Workflow Design: Created an n8n workflow triggered every Monday morning.",
                "Data Fetching: Connected to YouTube API to get stats for the latest videos.",
                "AI Agent: Passed the data to an AI Agent (LLM) with a prompt to 'Analyze performance and compare with average'.",
                "Action: The workflow saves the raw numbers to Google Sheets and sends a text summary of the analysis to Telegram."
              ]
            },
            result: {
              title: "Impact & Results",
              content: "Fully automated the reporting loop. I now save 5 hours/week of manual work and receive a high-quality AI-generated summary of channel health directly on my phone every week."
            }
          }
        },
      ],
    },
    education: {
      title: "Education",
      school: "Hanoi University of Pharmacy",
      desc: "Faculty of Pharmaceutical Management and Economics. Focus on Systems Thinking and Process Management.",
      certTitle: "My certifications",
      certDesc: "Professional certifications that validate my expertise",
      certs: [
        { 
          title: "Google Data Analytics Professional Certificate", 
          issuer: "Coursera", 
          image: "/cert/google-da.jpg",
          link: "https://www.credly.com/badges/0dfc9f0a-9c74-4926-a8b8-9bec4cd1356d" 
        },
        { 
          title: "Google Advanced Data Analytics Certificate", 
          issuer: "Coursera", 
          image: "/cert/google-advanced.jpg", 
          link: "https://www.credly.com/badges/fef4f6ad-46e0-44f8-b89a-2871d7ffd1c4" 
        },
        { 
          title: "Google Business Intelligence Certificate", 
          issuer: "Coursera", 
          image: "/cert/google-bi.jpg", 
          link: "https://www.credly.com/badges/c7f4839d-2d34-4052-8776-503cff8e8078" 
        },
        { 
          title: "SQL (Advanced) Certificate", 
          issuer: "HackerRank", 
          image: "/cert/hackerrank.jpg", 
          link: "https://www.hackerrank.com/certificates/iframe/c194b6d6eef9" 
        },
      ]
    },
    footer: {
      text: "Built by",
      copyright: "© 2026. Ready for new challenges.",
    }
  },
  vi: {
    nav: {
      contact: "Liên Hệ",
      download: "Tải CV",
      toc: {
        title: "Mục Lục",
        items: [
          { id: "hero", label: "Trang Chủ" },
          { id: "about", label: "Về Tôi" },
          { id: "experience", label: "Kinh Nghiệm" },
          { id: "skills", label: "Kỹ Năng" },
          { id: "projects", label: "Dự Án" },
          { id: "education", label: "Học Vấn" },
        ]
      }
    },
    hero: {
      title: "Chào, mình là Thái Trung Kiên",
      role: "Chuyên viên Phân tích & Kỹ sư Dữ liệu",
      desc: "Là một <strong>CHUYÊN GIA DỮ LIỆU ĐA NĂNG (HYBRID)</strong> với <em>tư duy hệ thống khắt khe</em> được rèn luyện từ nền tảng ngành dược, tôi đóng vai trò là <em>cầu nối chiến lược</em> giữa hạ tầng kỹ thuật phức tạp và sự tăng trưởng bền vững của doanh nghiệp. Bằng cách <em>điều phối các kiến trúc streaming thời gian thực</em> với <strong>Kafka</strong>, <strong>Debezium</strong> và <strong>Spark</strong> trên <strong>Kubernetes</strong> để <em>loại bỏ độ trễ dữ liệu</em>, đồng thời hợp nhất các tập dữ liệu phân mảnh thông qua <strong>dbt</strong> và <strong>PostgreSQL</strong> thành một <em>'Nguồn sự thật duy nhất'</em> (Single Source of Truth), tôi thiết lập một <em>nền tảng có tính toàn vẹn cao</em> cho hoạt động phân tích cấp doanh nghiệp. Tận dụng hạ tầng này, tôi chuyển hóa dữ liệu thô thành các <em>tài sản chiến lược</em> thông qua các công cụ <em>Business Intelligence</em> như <strong>Tableau</strong> và <strong>Metabase</strong>, cung cấp những <em>insight định hướng dữ liệu có tác động mạnh mẽ</em>—từ <strong>phân khúc RFM</strong> đến <strong>phân tích cảm xúc (sentiment analysis)</strong>—nhằm <em>điều hướng các quyết định chiến lược của ban lãnh đạo</em>. Phương pháp tiếp cận toàn diện <em>(end-to-end)</em> này đã cho phép tôi tạo ra những <em>hiệu quả vận hành có thể đo lường được</em>, tiêu biểu là việc <strong>giảm 90% khối lượng công việc thủ công</strong>, đồng thời <strong>tăng tỷ lệ chuyển đổi thêm 17%</strong> và <strong>tỷ lệ giữ chân khách hàng thêm 15%</strong>.",
    },
    about: {
      title: "Về Tôi",
      slogan: "Chuyển hóa dữ liệu thô thành những insight có tính ứng dụng cao",
      desc: "Chuyên viên Phân tích Dữ liệu tỉ mỉ với hơn 1 năm kinh nghiệm trong lĩnh vực Y tế và Marketing Analytics. Thành thạo SQL, Python và Trực quan hóa dữ liệu (Looker Studio/Power BI), tôi chuyên biến dữ liệu thô thành những hiểu biết hành động giúp thúc đẩy hiệu suất nền tảng và hiệu quả vận hành. Với tấm bằng Dược sĩ cung cấp sự hiểu biết sâu sắc về nghiệp vụ, tôi hiện đang mở rộng kỹ năng kỹ thuật sang Kỹ thuật dữ liệu (ETL, BigQuery, Airflow) để xây dựng các giải pháp dữ liệu mở rộng. Mong muốn tận dụng sự kết hợp độc đáo giữa tư duy phân tích chặt chẽ và kỹ năng kỹ thuật mới để đóng góp cho môi trường HealthTech dựa trên dữ liệu. Ngoài ra, tôi mong muốn mở rộng và áp dụng tư duy phân tích vào các lĩnh vực đa dạng như Ngân hàng, Nhân sự và Digital Marketing.",
      cards: {
        bg: {
          title: "Kiến Thức Nghiệp Vụ",
          desc: "Gốc rễ vững chắc trong Y Dược (ĐH Dược HN). Mở rộng thành công sang Marketing, Tài chính (Ngân hàng) và Vận hành.",
        },
        tech: {
          title: "Sức Mạnh Kỹ Thuật",
          desc: "Khả năng Full-stack: Thu thập (Crawling/ETL) -> Lưu trữ (BigQuery/SQL) -> Phân tích (Python) -> Báo cáo (Power BI/Looker).",
        },
        goal: {
          title: "Mục Tiêu",
          desc: "Trở thành Senior Analytics Engineer có khả năng thiết kế hệ thống dữ liệu quy mô lớn giải quyết bài toán đa ngành.",
        },
      },
    },
    experience: {
      title: "Kinh Nghiệm Làm Việc",
      desc: "Hành trình tạo ra tác động thực tế bằng dữ liệu.",
      jobs: [
        {
          title: "Analytics Engineer",
          company: "Mevis Healthcare",
          period: "Th9 2025 – Th11 2025",
          location: "Hà Nội - Việt Nam, Vĩnh Phúc - Việt Nam",
          image: "/experiences/mevis-healthcare.png",
          description: [
            "Tái cấu trúc các luồng ETL cốt lõi để tích hợp dữ liệu tốc độ cao, giảm 75% thời gian chuẩn bị dữ liệu và đảm bảo độ sẵn sàng dữ liệu 99%.",
            "Xây dựng hạ tầng dữ liệu cho User Portal chịu tải cao, hỗ trợ truy cập dữ liệu thời gian thực cho hàng ngàn người dùng.",
            "Triển khai các dashboard BI chiến lược trên Looker Studio để chuyển đổi logs vận hành thành thông tin chiến lược cho lãnh đạo.",
          ],
        },
        {
          title: "Data Analyst",
          company: "Bệnh viện Đa khoa Phương Đông",
          period: "Th1 2025 – Th7 2025",
          location: "Hà Nội - Việt Nam",
          image: "/experiences/bvpd.png",
          description: [
            "Phân tích dữ liệu Vòng đời người dùng và Omnichannel cho team Marketing, xác định các điểm chạm chính giúp tăng hiệu quả tiếp thị lên 17%.",
            "Thiết lập hệ thống kho dữ liệu Google BigQuery, tối ưu hóa lưu trữ và tăng tốc độ truy vấn 52%, cho phép báo cáo thời gian thực cho 15+ bên liên quan.",
            "Thiết kế dashboard Looker theo dõi KPIs (Lưu lượng, Chuyển đổi, Doanh thu), hỗ trợ trực tiếp các quyết định chiến lược giúp giảm 10% chi phí vận hành.",
            "Triển khai quy trình CSKH tự động sử dụng data triggers, giảm 15% thời gian thủ công và tăng CSAT lên 10%.",
            "Tự động hóa trích xuất dữ liệu YouTube qua n8n, tích hợp vào Google Sheets và Looker Studio.",
          ],
        },
        {
          title: "BI Developer & Trainer",
          company: "Công ty ComeEco (Freelance)",
          period: "Th5 2025 – Th7 2025",
          location: "Remote",
          image: "/experiences/come-eco.png",
          description: [
            "Xây dựng giải pháp báo cáo tài chính Power BI tinh gọn: thiết kế mô hình dữ liệu, tạo dashboard tương tác và tự động hóa gửi báo cáo.",
            "Cung cấp cho CEO và lãnh đạo thông tin chi tiết thời gian thực và dự báo tương lai.",
            "Đào tạo 'Excel cho Data Analysts' cho nhân viên: soạn thảo các bài thực hành về hàm nâng cao, PivotTables và trực quan hóa.",
          ],
        },
        {
          title: "Founder & Community Lead",
          company: "Cộng đồng Xóm Data",
          period: "Th4 2025 – Hiện tại",
          location: "Cộng đồng Facebook",
          image: "/experiences/xom-data.png",
          description: [
            "Sáng lập và phát triển Cộng đồng Dữ liệu từ 0 lên 20,000 thành viên trong 70 ngày sử dụng Chiến lược Nội dung dựa trên Dữ liệu.",
            "Tạo chuỗi nội dung về tổng quan dữ liệu và ứng dụng SQL thực tiễn trong chăm sóc sức khỏe, nâng cao tương tác và chia sẻ kiến thức.",
          ],
        },
      ],
    },
    skills: {
      title: "Kỹ Năng & Chuyên Môn",
      desc: "Bộ kỹ năng toàn diện bao gồm Kiến thức Nghiệp vụ, Thành thạo Kỹ thuật và Khả năng Lãnh đạo.",
      tabs: ["Kiến Thức Nghiệp Vụ", "Kỹ Năng Kỹ Thuật", "Kỹ Năng Mềm"],
      domain: [
        { name: "Y tế & Dược phẩm", icon: "/skills/healthcare.svg", desc: "Luồng bệnh nhân, Quản lý doanh thu (RCM), Phân tích EHR, Nguyên tắc GMP." },
        { name: "Marketing Analytics", icon: "/skills/marketing.svg", desc: "Hiệu suất đa kênh (Omnichannel), ROI/ROAS, Hành trình khách hàng, SEO." },
        { name: "Digital & Platform", icon: "/skills/digital-platform.svg", desc: "Phân tích lưu lượng, Tương tác người dùng, Hiệu suất ứng dụng, GA4." },
        { name: "Vận hành Doanh nghiệp", icon: "/skills/business-operation.svg", desc: "Tối ưu hóa quy trình, Tự động hóa luồng báo cáo, Theo dõi KPI." },
      ],
      technical: [
        {
          title: "Business Intelligence",
          tools: [
            { name: "Power BI", icon: "/skills/Power_BI.svg", desc: "DAX, Data Modeling, RLS, Power Query, Report Server." },
            { name: "Looker Studio", icon: "/skills/looker-studio.svg", desc: "Interactive Dashboards, Data Blending, Calculated Fields." },
            { name: "Tableau", icon: "/skills/tableau.svg", desc: "LOD Expressions, Parameters, Storytelling." }
          ]
        },
        {
          title: "Data Warehousing & Database",
          tools: [
            { name: "BigQuery", icon: "/skills/bigquery.svg", desc: "Partitioning, Clustering, Nested Data, GIS." },
            { name: "PostgreSQL", icon: "/skills/postgresql.svg", desc: "Stored Procedures, Triggers, Indexing, JSONB." },
            { name: "SQL Server", icon: "/skills/mssql.svg", desc: "T-SQL, SSIS, SSAS, Performance Tuning." }
          ]
        },
        {
          title: "Data Engineering & ETL",
          tools: [
            { name: "Apache Airflow", icon: "/skills/airflow.svg", desc: "DAGs, Operators, XComs, TaskFlow API." },
            { name: "Apache Spark", icon: "/skills/spark.svg", desc: "Distributed Processing, PySpark, Databricks, Optimization." },
            { name: "Apache Kafka", icon: "/skills/kafka.svg", desc: "Real-time Streaming, Pub/Sub, Event Driven Architecture." },
            { name: "Python", icon: "/skills/python.svg", desc: "Pandas, NumPy, SQLAlchemy, OOP, PySpark." },
            { name: "dbt", icon: "/skills/dbt.svg", desc: "Data Transformation, Testing, Documentation, Jinja." },
            { name: "n8n", icon: "/skills/n8n.svg", desc: "Workflow Automation, Webhooks, API Integration." }
          ]
        },
        {
          title: "DevOps & Tools",
          tools: [
            { name: "Docker", icon: "/skills/docker.svg", desc: "Containerization, Docker Compose, Multi-stage builds." },
            { name: "GitHub", icon: "/skills/github.svg", desc: "Version Control, Actions, Branching Strategies." },
            { name: "Jira", icon: "/skills/jira.svg", desc: "Agile, Scrum, Sprint Planning, Task Management." }
          ]
        }
      ],
      soft: [
        { 
          name: "Data Storytelling", 
          icon: "/skills/data-storytelling.svg", 
          desc: "Khả năng chuyển đổi các tập dữ liệu phức tạp thành những insight có tính ứng dụng cao (actionable insights) dành cho các bên liên quan phi kỹ thuật (non-tech stakeholders)." 
        },
        { 
          name: "Leadership",
          icon: "/skills/leadership.svg", 
          desc: "Founder/Admin của cộng đồng 'Xóm Data' (hơn 20.000 thành viên) – Minh chứng cho tinh thần trách nhiệm cao và khả năng dẫn dắt cộng đồng." 
        },
        { 
          name: "Detail-Oriented",
          icon: "/skills/detail-oriented.svg", 
          desc: "Dày dạn kinh nghiệm xử lý các dữ liệu Y tế/Sức khỏe nhạy cảm, đảm bảo tính toàn vẹn dữ liệu (data integrity) lên đến 99%." 
        },
        { 
          name: "Growth Mindset",
          icon: "/skills/growth-mindset.svg", 
          desc: "Thích nghi và phát triển mạnh mẽ trong môi trường nhịp độ nhanh (fast-paced), chủ động tự trau dồi các công nghệ mới (Airflow, Docker)." 
        },
        { 
          name: "Critical Thinking",
          icon: "/skills/critical-thinking.svg", 
          desc: "Sở hữu tư duy tiếp cận vấn đề đa chiều, kết hợp hài hòa giữa góc nhìn nghiệp vụ (Business) và khía cạnh kỹ thuật (Technical)." 
        }
      ]
    },
    projects: {
      title: "Dự Án Tiêu Biểu",
      desc: "Danh mục dự án toàn diện bao gồm Y tế, Marketing, Ngân hàng, Game và Kỹ thuật Dữ liệu.",
      list: [
        {
          slug: "vpi-hospital-reporting",
          title: "Tự động hóa Báo cáo Bệnh viện VPI (ETL Project)",
          tags: ["Healthcare", "Marketing", "Data Engineering", "Python"],
          link: "https://github.com/kina2711/vpi_etl_pipeline",
          objective: "Xây dựng luồng ETL mạnh mẽ để đồng bộ hóa dữ liệu bệnh viện khối lượng lớn từ PostgreSQL sang Google Sheets/BI.",
          description: "Thiết kế pipeline ETL điều khiển bằng cấu hình (configuration-driven) với xử lý hàng loạt thông minh. Tự động hóa 4 báo cáo quan trọng hàng ngày.",
          metrics: "Giảm 90% thời gian chuẩn bị dữ liệu thủ công (15 giờ/tuần). Đạt độ tin cậy 99%.",
          
          // --- CHI TIẾT ---
          details: {
            problem: {
              title: "Thách thức & Bối cảnh",
              content: "Đội ngũ Marketing tại Bệnh viện VPI đối mặt với khủng hoảng 'phân mảnh dữ liệu'. Thông tin bệnh nhân quan trọng nằm rải rác giữa cơ sở dữ liệu PostgreSQL cũ và hơn 20 file Google Sheets rời rạc do các phòng ban khác nhau nhập liệu. Nhân viên phải mất 15 giờ mỗi tuần chỉ để copy-paste và gộp dữ liệu thủ công. Quy trình này dễ xảy ra sai sót con người, dẫn đến báo cáo chậm trễ và số liệu thiếu tin cậy gửi lên Ban Giám Đốc."
            },
            tools: {
              title: "Công nghệ sử dụng",
              items: ["Python (Pandas, SQLAlchemy)", "Apache Airflow (Điều phối)", "PostgreSQL (Kho dữ liệu)", "Google Sheets API", "Looker Studio"]
            },
            process: {
              title: "Quy trình thực hiện",
              steps: [
                "Thiết kế kiến trúc: Tôi chuyển đổi từ các script cứng nhắc sang kiến trúc 'Configuration-Driven'. Điều này cho phép thêm nguồn báo cáo mới chỉ bằng cách cập nhật file cấu hình JSON mà không cần viết lại code lõi.",
                "Thu thập dữ liệu (Extract): Xây dựng các connector Python để lấy dữ liệu thô từ PostgreSQL và Google Sheets API. Áp dụng kỹ thuật 'Smart Batch Processing' để xử lý tập dữ liệu lớn mà không gây tràn bộ nhớ.",
                "Làm sạch & Chuyển đổi (Transform): Sử dụng Pandas để chuẩn hóa định dạng ngày tháng, xử lý dữ liệu trống (Null) và loại bỏ bản ghi trùng lặp dựa trên mã bệnh nhân.",
                "Tự động hóa & Tải (Load): Thiết lập Airflow DAGs để tự động chạy pipeline vào 6:00 sáng hàng ngày. Xây dựng cơ chế 'Tự động thử lại' (Retry Mechanism) nếu kết nối mạng bị gián đoạn, đảm bảo hệ thống luôn ổn định."
              ]
            },
            result: {
              title: "Kết quả & Tác động",
              content: "Hệ thống đã loại bỏ hoàn toàn việc chuẩn bị dữ liệu thủ công. Đội ngũ Marketing tiết kiệm được 15 giờ/tuần, chuyển trọng tâm từ 'Nhập liệu' sang 'Phân tích chiến lược'. Dashboard tự động trên Looker Studio hiện cung cấp thông tin chi tiết theo thời gian thực mỗi sáng với độ chính xác 99%, giúp ra quyết định nhanh chóng cho các chiến dịch của bệnh viện."
            }
          }
        },
        {
          slug: "vpi-health-booking",
          title: "VPI Health - Nền tảng Đặt lịch & Chăm sóc Bệnh nhân",
          tags: ["Healthcare", "Product", "Database Design", "Next.js"],
          link: "https://github.com/kina2711/vpi-health",
          objective: "Phát triển nền tảng đặt lịch để tối ưu hóa quy trình chăm sóc và đảm bảo chất lượng dữ liệu ngay từ đầu vào.",
          description: "Xây dựng frontend và cấu trúc dữ liệu cho hệ thống đặt lịch, đảm bảo trải nghiệm người dùng mượt mà và thu thập dữ liệu chính xác.",
          metrics: "Giảm 40% thời gian xử lý đặt lịch. Đạt 100% độ chính xác dữ liệu đầu vào.",
          
          // --- CHI TIẾT ---
          details: {
            problem: {
              title: "Thách thức & Bối cảnh",
              content: "Quy trình đặt lịch truyền thống của bệnh viện phụ thuộc hoàn toàn vào trực tổng đài và nhập liệu thủ công vào Excel. Điều này gây ra hai vấn đề lớn: 1) Tổng đài thường xuyên quá tải làm mất khách hàng. 2) Nhập liệu thủ công tạo ra 'Dữ liệu bẩn' (sai số điện thoại, trùng lặp hồ sơ bệnh nhân), khiến đội ngũ Data không thể phân tích nhân khẩu học hay hiệu quả Marketing một cách chính xác."
            },
            tools: {
              title: "Công nghệ sử dụng",
              items: ["Next.js (Frontend Framework)", "Tailwind CSS (UI/UX)", "PostgreSQL (Cơ sở dữ liệu)", "React Hook Form (Kiểm tra dữ liệu)", "Supabase (Backend)"]
            },
            process: {
              title: "Quy trình thực hiện",
              steps: [
                "Thiết kế CSDL (Database Schema): Thiết kế sơ đồ SQL chuẩn hóa (Bảng Bệnh nhân, Lịch hẹn, Bác sĩ) để đảm bảo tính toàn vẹn dữ liệu và ngăn chặn trùng lặp.",
                "UI/UX & Validation: Xây dựng giao diện thân thiện với các quy tắc kiểm tra đầu vào nghiêm ngặt (Regex cho SĐT, chọn ngày tháng) để buộc dữ liệu phải 'sạch' ngay từ phía người dùng.",
                "Tối ưu hóa quy trình: Tự động hóa luồng từ 'Yêu cầu đặt lịch' -> 'SMS xác nhận' -> 'Lưu vào Database', loại bỏ thao tác thủ công của lễ tân.",
                "Tích hợp cho Phân tích: Cấu trúc dữ liệu để dễ dàng truy vấn cho các báo cáo sau này (Ví dụ: Giờ cao điểm đặt lịch, Tỷ lệ chuyển đổi theo chuyên khoa)."
              ]
            },
            result: {
              title: "Kết quả & Tác động",
              content: "Nền tảng đã thay đổi hoàn toàn vận hành đặt lịch. Khối lượng công việc của lễ tân giảm 40%, giúp họ tập trung chăm sóc bệnh nhân tại quầy. Quan trọng nhất đối với Analytics: Độ sạch của dữ liệu đạt 100% ngay tại nguồn, cho phép báo cáo chính xác về xu hướng bệnh nhân mà không cần tốn hàng giờ làm sạch file Excel."
            }
          }
        },
        {
          slug: "tiktok-data-scraping",
          title: "Phân tích Xu hướng TikTok & Scraping",
          tags: ["Marketing", "Data Crawling", "Python", "Selenium", "Looker Studio"],
          link: "https://github.com/kina2711/scrape_tiktok",
          objective: "Tự động hóa việc trích xuất dữ liệu TikTok để xác định xu hướng và định hướng chiến lược nội dung.",
          description: "Phát triển tool cào dữ liệu bằng Python (Selenium) để thu thập chỉ số video, làm sạch bằng Pandas và trực quan hóa xu hướng trên Looker Studio.",
          metrics: "Tăng tương tác khán giả lên 12%. Giảm 50% nỗ lực nghiên cứu thủ công.",
          
          // --- CHI TIẾT ---
          details: {
            problem: {
              title: "Thách thức & Bối cảnh",
              content: "Việc xác định xu hướng (Trending) trên TikTok trước đây hoàn toàn dựa vào 'cảm tính' và việc lướt dạo thủ công. Đội Marketing thiếu dữ liệu cụ thể về việc Hashtag nào, Nhạc nền gì hay Thời lượng video bao nhiêu mới thực sự tạo ra tương tác. Việc thu thập dữ liệu bằng tay vừa tốn thời gian, vừa không theo kịp tốc độ thay đổi chóng mặt của nền tảng."
            },
            tools: {
              title: "Công nghệ sử dụng",
              items: ["Python (Xử lý chính)", "Selenium (Tự động hóa Web)", "Pandas (Làm sạch dữ liệu)", "Regular Expressions (Xử lý văn bản)", "Looker Studio (Báo cáo)"]
            },
            process: {
              title: "Quy trình thực hiện",
              steps: [
                "Phát triển Bot: Viết script Python sử dụng Selenium để giả lập hành vi người dùng thật (tự động đăng nhập, cuộn trang vô hạn) nhằm vượt qua các lớp bảo vệ cơ bản.",
                "Trích xuất dữ liệu: Thu thập các chỉ số quan trọng (Lượt xem, Tim, Chia sẻ, Bình luận), Thời lượng video và Hashtags từ hàng trăm video thuộc các chủ đề quan tâm.",
                "Làm sạch dữ liệu: Sử dụng Pandas và Regex để xử lý dữ liệu thô từ web (ví dụ: chuyển đổi '1.2M' view thành số nguyên, lọc bỏ emoji, xử lý dữ liệu trống).",
                "Trực quan hóa: Kết nối dữ liệu sạch với Looker Studio để tạo Dashboard theo dõi 'Top Hashtag thịnh hành' và 'Thời lượng video tối ưu' theo thời gian thực."
              ]
            },
            result: {
              title: "Kết quả & Tác động",
              content: "Chuyển đổi chiến lược nội dung từ 'Phỏng đoán' sang 'Định hướng dữ liệu'. Đội ngũ đã xác định được các hashtag ngách hiệu quả, giúp tăng tương tác tổng thể lên 12% trong tháng đầu tiên. Tool tự động hóa giúp tiết kiệm khoảng 10 giờ nghiên cứu thủ công mỗi tuần (giảm 50% nỗ lực)."
            }
          }
        },
        {
          slug: "customer-rfm-segmentation",
          title: "Customer 360: Phân khúc Khách hàng RFM",
          tags: ["Marketing", "Analytics", "SQL", "Power BI", "RFM"],
          link: "https://github.com/kina2711/customer_360",
          objective: "Phân khúc khách hàng sử dụng mô hình RFM (Recency, Frequency, Monetary) để nâng cao khả năng giữ chân và cá nhân hóa tiếp thị.",
          description: "Phân tích dữ liệu giao dịch để chia khách hàng thành các nhóm hành động (Champions, Nguy cơ rời bỏ, Ngủ đông) và đề xuất chiến lược riêng.",
          metrics: "Tăng tỷ lệ giữ chân lên 15% và giảm tỷ lệ rời bỏ ở các phân khúc rủi ro cao xuống 20%.",
          
          // --- CHI TIẾT ---
          details: {
            problem: {
              title: "Thách thức & Bối cảnh",
              content: "Công ty đang sử dụng phương pháp 'Tiếp thị đại trà' (Mass Marketing), gửi cùng một email khuyến mãi cho tất cả mọi người—từ khách hàng VIP trung thành đến những người đã một năm không mua hàng. Kết quả là tỷ lệ mở email thấp, lãng phí ngân sách và gây phiền toái cho khách hàng. Đội Marketing cần biết chính xác *ai* cần nhắm tới và *khi nào*, nhưng họ thiếu một khung phân loại người dùng dựa trên hành vi mua sắm thực tế."
            },
            tools: {
              title: "Công nghệ & Kỹ thuật",
              items: ["SQL (Window Functions, CTEs)", "Power BI (Dashboarding)", "Python (Phân cụm K-Means - Mở rộng)", "Mô hình phân tích RFM"]
            },
            process: {
              title: "Quy trình thực hiện",
              steps: [
                "Chuẩn bị dữ liệu: Trích xuất lịch sử giao dịch 2 năm gần nhất bằng SQL. Làm sạch dữ liệu bằng cách xử lý các đơn hàng hoàn/trả và loại bỏ các giá trị ngoại lai (âm).",
                "Tính toán chỉ số RFM: Tính 3 chỉ số chính cho từng khách hàng: Recency (Số ngày từ lần mua cuối), Frequency (Tổng số đơn hàng), và Monetary (Tổng chi tiêu).",
                "Chấm điểm & Phân khúc: Xếp hạng người dùng theo thang điểm 1-5 cho mỗi chỉ số. Kết hợp các điểm này để chia khách hàng thành 10 nhóm riêng biệt (VD: 'Quán quân', 'Trung thành', 'Nguy cơ rời bỏ', 'Ngủ đông').",
                "Xây dựng chiến lược: Chuyển đổi các phân khúc này thành hành động kinh doanh. Ví dụ: Nhóm 'Quán quân' được ưu tiên mua sản phẩm mới; Nhóm 'Nguy cơ' nhận được mã giảm giá để quay lại."
              ]
            },
            result: {
              title: "Kết quả & Tác động",
              content: "Mô hình phân khúc đã giúp công ty chuyển dịch thành công từ 'Tiếp thị đại trà' sang 'Tiếp thị mục tiêu'. Bằng cách cá nhân hóa thông điệp cho từng nhóm, chúng tôi đã đạt mức tăng trưởng 15% trong Tỷ lệ giữ chân khách hàng (Retention Rate). Cụ thể, chiến dịch 'Win-back' nhắm vào nhóm 'Nguy cơ rời bỏ' đã kích hoạt lại thành công 20% khách hàng sắp mất, những người mà trước đây bị bỏ qua."
            }
          }
        },
        {
          slug: "fpt-customer-sentiment",
          title: "Phân tích Cảm xúc Khách hàng FPT (NLP)",
          tags: ["Marketing", "NLP", "Machine Learning", "Python"],
          link: "https://github.com/kina2711/customer_sentiment_analysis",
          objective: "Phân tích hàng nghìn phản hồi của khách hàng để đo lường chỉ số cảm xúc và xác định nguyên nhân gốc rễ của sự không hài lòng.",
          description: "Áp dụng kỹ thuật NLP để trích xuất cảm xúc từ văn bản, phân loại đánh giá bằng mô hình ML và trực quan hóa các điểm nóng (pain points).",
          metrics: "Cải thiện sự hài lòng (CSAT) lên 25%. Giảm 30% thời gian xử lý khiếu nại.",
          
          // --- CHI TIẾT ---
          details: {
            problem: {
              title: "Thách thức & Bối cảnh",
              content: "FPT Telecom nhận được hàng nghìn bình luận và đánh giá mỗi ngày trên mạng xã hội và App Store. Việc đọc thủ công để đánh giá sức khỏe thương hiệu là bất khả thi. Đội ngũ CSKH biết khách hàng không hài lòng (đánh giá sao thấp), nhưng họ không biết chính xác *tại sao* (Do tốc độ mạng? Thái độ nhân viên? Hay giá cước?). Họ cần một giải pháp tự động để 'lắng nghe' tiếng nói khách hàng trên quy mô lớn."
            },
            tools: {
              title: "Công nghệ & Kỹ thuật",
              items: ["Python (NLTK, Scikit-learn)", "TF-IDF (Trích xuất đặc trưng)", "Logistic Regression (Mô hình phân loại)", "Pandas & Seaborn (Trực quan hóa)", "WordCloud"]
            },
            process: {
              title: "Quy trình thực hiện",
              steps: [
                "Tiền xử lý dữ liệu: Làm sạch dữ liệu văn bản tiếng Việt phi cấu trúc bằng cách loại bỏ từ dừng (stopwords), ký tự đặc biệt và emoji. Thực hiện tách từ (tokenization) để chuẩn bị dữ liệu cho mô hình.",
                "Kỹ thuật đặc trưng (Feature Engineering): Chuyển đổi văn bản thành các vector số bằng kỹ thuật TF-IDF để máy tính hiểu được mức độ quan trọng của từ ngữ.",
                "Huấn luyện mô hình: Huấn luyện và so sánh nhiều mô hình Machine Learning (Naive Bayes, Logistic Regression). Đạt độ chính xác 85% trong việc phân loại đánh giá là Tích cực, Tiêu cực hoặc Trung lập.",
                "Trích xuất Insight: Sử dụng WordCloud để trực quan hóa các từ khóa xuất hiện nhiều nhất trong nhóm 'Tiêu cực' (ví dụ: 'mạng lag', 'rớt mạng', 'tổng đài')."
              ]
            },
            result: {
              title: "Kết quả & Tác động",
              content: "Mô hình giúp tự động gắn nhãn các phản hồi tiêu cực theo thời gian thực, cho phép đội CSKH ưu tiên xử lý các trường hợp khẩn cấp. Bằng việc phát hiện ra 60% khiếu nại đến từ vấn đề hạ tầng tại Quận 9, đội kỹ thuật đã khắc phục tận gốc, giúp chỉ số hài lòng khách hàng (CSAT) tăng 25% và giảm 30% thời gian xử lý khiếu nại."
            }
          }
        },
        {
          slug: "mobile-game-analytics",
          title: "Gamelytics: Phân tích Vòng đời Game Mobile",
          tags: ["Game", "BigQuery", "Python", "Tableau"],
          link: "https://github.com/kina2711/game-lifecycle-analytics",
          objective: "Phân tích hơn 1 triệu log sự kiện để giải quyết khủng hoảng giữ chân người dùng.",
          description: "Xây dựng pipeline ETL với BigQuery để phân tích hành vi người dùng, phát hiện điểm gãy 95% tại Level 10.",
          metrics: "Khôi phục ước tính $50k doanh thu. Tăng tỷ lệ giữ chân ngày 1 (D1) thêm 15%.",
          
          // --- CHI TIẾT ---
          details: {
            problem: {
              title: "Thách thức & Bối cảnh",
              content: "Sau khi phát hành thử nghiệm (soft launch), tựa game RPG của chúng tôi thu về hơn 1 triệu log sự kiện nhưng đối mặt với khủng hoảng giữ chân người dùng nghiêm trọng. Dù lượng tải game (User Acquisition) rất tốt, nhưng tỷ lệ quay lại sau 3 ngày (D3 Retention) sụt giảm bất thường. Đội ngũ sản phẩm hoàn toàn mù mờ thông tin: Do lỗi game? Do hướng dẫn nhàm chán? Hay do game quá khó? Chúng tôi cần tìm ra 'lỗ hổng' trong hành trình người dùng ngay lập tức."
            },
            tools: {
              title: "Công cụ & Kỹ thuật",
              items: ["Google BigQuery (Kho dữ liệu)", "SQL (Truy vấn nâng cao)", "Python (Pandas/Matplotlib)", "Tableau (Trực quan hóa)", "Firebase Analytics"]
            },
            process: {
              title: "Quy trình thực hiện",
              steps: [
                "Data Ingestion: Kiến trúc một ETL pipeline để chuyển log sự kiện thô từ Firebase sang BigQuery nhằm xử lý khối lượng dữ liệu lớn (1M+ dòng) một cách hiệu quả.",
                "Data Cleaning: Sử dụng SQL để lọc bỏ bot, thiết bị của dev và các phiên 'bounce' (người dùng hoạt động < 5 giây) để đảm bảo tính chính xác của dữ liệu.",
                "Funnel Analysis (Phân tích phễu): Vẽ bản đồ hành trình người dùng từ [Cài đặt] -> [Xong hướng dẫn] -> [Level 1] ... -> [Level 20]. Bước này là chìa khóa để phát hiện điểm rơi chính xác.",
                "Phân khúc hành vi: Chia nhóm người dùng thành 'Whales' (Chi tiêu cao) và 'F2P' (Chơi miễn phí) để hiểu hành vi nào dẫn đến quyết định nạp tiền lần đầu."
              ]
            },
            result: {
              title: "Kết quả & Tác động",
              content: "Phân tích đã chỉ ra một 'thung lũng chết' tại Level 10, nơi 95% người chơi miễn phí rời bỏ vì độ khó tăng quá đột ngột. Bằng việc đề xuất điều chỉnh độ khó và tặng 'Gói quà tân thủ' tại Level 9, chúng tôi đã tăng tỷ lệ giữ chân ngày 1 (D1 Retention) lên 15%. Tối ưu hóa này ước tính giúp khôi phục $50,000 doanh thu tiềm năng hàng năm."
            }
          }
        },
        {
          slug: "job-listings-scraper",
          title: "Tool Cào Dữ Liệu Tuyển Dụng",
          tags: ["Data Crawling", "Automation", "Python", "Selenium"],
          link: "https://github.com/kina2711/scrape_job_using_python",
          objective: "Tự động hóa việc thu thập dữ liệu thị trường việc làm để phân tích xu hướng.",
          description: "Phát triển script Python để cào hàng nghìn mô tả công việc, chức danh và yêu cầu từ các trang tuyển dụng lớn.",
          metrics: "Thu thập 1,000+ tin/giờ. Giảm 95% thời gian nghiên cứu thủ công.",
          
          details: {
            problem: {
              title: "Thách thức",
              content: "Để hiểu xu hướng thị trường lao động, cần phân tích hàng nghìn tin tuyển dụng. Việc làm thủ công (truy cập web, copy-paste) quá chậm và dễ sai sót. Tôi cần một giải pháp để xây dựng tập dữ liệu lớn nhằm xác định các kỹ năng được săn đón nhất."
            },
            tools: {
              title: "Công nghệ",
              items: ["Python", "Selenium (Tự động hóa trình duyệt)", "BeautifulSoup (Xử lý HTML)", "Pandas", "CSV"]
            },
            process: {
              title: "Quy trình",
              steps: [
                "Thiết lập Bot: Cấu hình Selenium để tự động duyệt web, xử lý phân trang và nội dung động.",
                "Định vị dữ liệu: Xác định các CSS selectors để trích xuất chính xác Chức danh, Công ty, Lương và Mô tả.",
                "Vòng lặp trích xuất: Script duyệt qua các trang, cào dữ liệu và xử lý các ngoại lệ (pop-up, mạng chậm).",
                "Lưu trữ: Dữ liệu được làm sạch và xuất ra file CSV có cấu trúc để phân tích."
              ]
            },
            result: {
              title: "Kết quả",
              content: "Xây dựng được bộ dữ liệu hơn 1,000 tin tuyển dụng trong chưa đầy 1 giờ (thay vì mất nhiều ngày làm tay). Phân tích cho thấy 'SQL' và 'Python' xuất hiện trong 80% JD ngành dữ liệu, giúp định hướng lộ trình học tập hiệu quả."
            }
          }
        },
        {
          slug: "banking-credit-segmentation",
          title: "Phân khúc Rủi ro Tín dụng Ngân hàng",
          tags: ["Banking", "Risk Analytics", "Clustering", "Python"],
          link: "https://github.com/kina2711/Banking_Credit_Segment_Exploration",
          objective: "Phân tích dữ liệu thẻ tín dụng để xác định các phân khúc khách hàng cho đánh giá rủi ro.",
          description: "Sử dụng thuật toán phân cụm K-Means để nhóm khách hàng dựa trên hành vi sử dụng thẻ, hỗ trợ phân tầng rủi ro.",
          metrics: "Xác định 4 nhóm chân dung khách hàng. Tăng độ chính xác khi nhắm mục tiêu thêm 20%.",
          
          details: {
            problem: {
              title: "Thách thức",
              content: "Ngân hàng đối mặt với tỷ lệ nợ xấu tăng nhưng lại áp dụng chính sách tín dụng 'cào bằng'. Họ không phân biệt được đâu là khách VIP chi tiêu nhiều và đâu là khách rủi ro chi tiêu vượt hạn mức. Mục tiêu là tìm ra các mẫu hành vi ẩn để có chính sách riêng cho từng nhóm."
            },
            tools: {
              title: "Công nghệ",
              items: ["Python", "Scikit-learn (K-Means)", "Pandas", "Matplotlib/Seaborn", "PCA (Giảm chiều dữ liệu)"]
            },
            process: {
              title: "Quy trình",
              steps: [
                "EDA & Tiền xử lý: Xử lý dữ liệu thiếu và chuẩn hóa (Scale) các đặc trưng như Số dư, Rút tiền mặt, Hạn mức để đảm bảo trọng số ngang nhau.",
                "Phân cụm: Áp dụng thuật toán K-Means. Sử dụng phương pháp 'Elbow' để tìm số cụm tối ưu (k=4).",
                "Định danh: Phân tích đặc điểm từng cụm. VD: Cụm 1: Số dư cao, ít mua sắm (Rủi ro). Cụm 2: Mua nhiều, trả hết (VIP)."
              ]
            },
            result: {
              title: "Kết quả",
              content: "Xác định được 4 chân dung khách hàng riêng biệt. Đội Rủi ro dùng kết quả này để thắt chặt hạn mức nhóm 'Rủi ro cao', trong khi Đội Marketing chào bán thẻ Premium cho nhóm 'VIP'."
            }
          }
        },
        {
          slug: "hr-analytics-attrition",
          title: "Phân tích Nhân sự & Nghỉ việc",
          tags: ["HR", "People Analytics", "Power BI", "Python"],
          link: "https://github.com/kina2711/HR_analytics_project",
          objective: "Phân tích dữ liệu nhân viên để hiểu nguyên nhân nghỉ việc và cải thiện giữ chân nhân tài.",
          description: "Trực quan hóa các chỉ số HR để xác định bộ phận có tỷ lệ biến động cao và các yếu tố tương quan như lương, làm thêm giờ.",
          metrics: "Xác định bộ phận Sales có tỷ lệ nghỉ việc cao nhất (30%). Đưa ra đề xuất giữ chân thực tế.",
          
          details: {
            problem: {
              title: "Thách thức",
              content: "Công ty đang gặp tình trạng tỷ lệ nghỉ việc cao, dẫn đến chi phí tuyển dụng tăng và giảm năng suất. Phòng Nhân sự cần chuyển từ việc 'phỏng vấn nghỉ việc' thụ động sang phân tích dữ liệu chủ động để hiểu TẠI SAO nhân viên rời đi."
            },
            tools: {
              title: "Công nghệ",
              items: ["Power BI (Dashboard tương tác)", "Python (Phân tích tương quan)", "Excel (Nguồn dữ liệu)"]
            },
            process: {
              title: "Quy trình",
              steps: [
                "Làm sạch dữ liệu: Chuẩn hóa hồ sơ nhân viên, xử lý dữ liệu trống và tính thâm niên.",
                "Phân tích khám phá: Chia nhỏ tỷ lệ nghỉ việc theo Phòng ban, Độ tuổi, Giới tính và Vị trí.",
                "Phân tích tương quan: Tìm mối liên hệ giữa Nghỉ việc và các yếu tố như 'Khoảng cách đi làm', 'Làm thêm giờ', 'Số năm chưa thăng chức'.",
                "Trực quan hóa: Xây dựng Dashboard Power BI cho HRBP theo dõi sức khỏe đội ngũ."
              ]
            },
            result: {
              title: "Kết quả",
              content: "Phát hiện ra 'Thiếu thăng chức' và 'Làm thêm giờ' là những yếu tố dự báo hàng đầu, đặc biệt ở bộ phận Sales (tỷ lệ nghỉ 30%). HR đã dùng insight này để sửa đổi chính sách thăng tiến và tuyển thêm nhân sự hỗ trợ giảm tải overtime."
            }
          }
        },
        {
          slug: "bank-deposit-segmentation",
          title: "Chiến lược Phân khúc Tiền gửi",
          tags: ["Banking", "Marketing", "Segmentation", "Python"],
          link: "https://github.com/kina2711/Bank_Deposit_Segmentation_Analysis",
          objective: "Phân khúc khách hàng tiền gửi để tối ưu hóa chiến lược bán chéo và tăng vốn huy động.",
          description: "Phân tích hành vi gửi tiền (Có kỳ hạn vs Không kỳ hạn) để tạo hồ sơ cho các chiến dịch marketing nhắm mục tiêu.",
          metrics: "Tăng độ chính xác mục tiêu. Tìm ra tiềm năng chưa khai thác ở nhóm 'Người tiết kiệm trẻ'.",
          
          details: {
            problem: {
              title: "Thách thức",
              content: "Ngân hàng cần tăng lượng tiền gửi (nguồn vốn rẻ). Tuy nhiên, các chiến dịch marketing cho Tiền gửi có kỳ hạn có tỷ lệ chuyển đổi rất thấp vì họ nhắm vào tất cả mọi người, kể cả những khách hàng ưu tiên tính thanh khoản hơn là lãi suất."
            },
            tools: {
              title: "Công nghệ",
              items: ["Python", "Pandas", "Matplotlib", "Thống kê mô tả"]
            },
            process: {
              title: "Quy trình",
              steps: [
                "Phân tích dữ liệu: Đối chiếu nhân khẩu học (Tuổi, Nghề nghiệp, Hôn nhân) với loại hình tiền gửi.",
                "Phân khúc: Nhóm khách hàng dựa trên hành vi tiết kiệm. VD: 'Hưu trí' (Số dư lớn, kỳ hạn dài) vs 'Sinh viên' (Số dư nhỏ, thanh khoản cao).",
                "Tìm kiếm Insight: Phát hiện nhóm 'Lao động phổ thông' có tiềm năng cao nhất cho gửi tiết kiệm ngắn hạn nhưng ít được quan tâm."
              ]
            },
            result: {
              title: "Kết quả",
              content: "Tạo ra các chiến dịch riêng biệt. Chiến dịch nhắm vào nhóm 'Lao động phổ thông' với sản phẩm tiết kiệm ngắn hạn linh hoạt đã đạt tỷ lệ chuyển đổi gấp 2 lần so với chiến dịch chung chung."
            }
          }
        },
        {
          slug: "banking-payment-segmentation",
          title: "Phân tích Tài khoản Thanh toán",
          tags: ["Banking", "Product", "SQL", "Behavioral Analysis"],
          link: "https://github.com/kina2711/Banking_Payment_Account_Segmentation",
          objective: "Hiểu các mẫu sử dụng tài khoản thanh toán để cải thiện tính năng sản phẩm và cấu trúc phí.",
          description: "Nhóm người dùng dựa trên tần suất và khối lượng giao dịch để thiết kế các gói tài khoản phù hợp.",
          metrics: "Định hướng lộ trình sản phẩm. Thiết kế gói 'Zero-Fee' cho người dùng tần suất cao.",
          
          details: {
            problem: {
              title: "Thách thức",
              content: "Cạnh tranh mảng thanh toán rất khốc liệt. Khách hàng đang rời bỏ sang các app Fintech vì cấu trúc phí của ngân hàng quá cứng nhắc. Đội Sản phẩm cần hiểu ai là 'Power Users' (người dùng tích cực) để thiết kế chương trình khách hàng thân thiết tốt hơn và ngăn chặn rời bỏ."
            },
            tools: {
              title: "Công nghệ",
              items: ["SQL (Aggregation, Case Statements)", "Python", "Trực quan hóa dữ liệu"]
            },
            process: {
              title: "Quy trình",
              steps: [
                "Hồ sơ giao dịch: Phân tích log giao dịch (chuyển khoản, thanh toán hóa đơn, quét QR) trong 6 tháng.",
                "Tính toán chỉ số: Tính Giao dịch trung bình ngày và Khối lượng giao dịch trung bình tháng cho mỗi user.",
                "Phân nhóm: Xác định nhóm 'Giao dịch tích cực' (Tần suất cao, giá trị nhỏ) vs 'Giao dịch giá trị cao' (Tần suất thấp, giá trị lớn)."
              ]
            },
            result: {
              title: "Kết quả",
              content: "Insight dẫn đến việc ra mắt gói tài khoản 'Zero-Fee' (Miễn phí) cho khách hàng duy trì số dư tối thiểu hoặc thực hiện 10+ giao dịch/tháng. Chiến lược này giữ chân thành công 85% nhóm 'Power User'."
            }
          }
        },
        {
          slug: "banking-intelligence-dashboard",
          title: "Dashboard Quản trị Ngân hàng",
          tags: ["Banking", "BI", "Power BI", "Data Modeling"],
          link: "https://github.com/kina2711/Banking-Intelligence",
          objective: "Tạo giải pháp BI tập trung để theo dõi hiệu suất chi nhánh và giám sát KPI.",
          description: "Tích hợp nhiều nguồn dữ liệu ngân hàng vào một dashboard thống nhất cho cái nhìn tổng quan của ban điều hành.",
          metrics: "Hợp lý hóa báo cáo cho 50+ giám đốc chi nhánh. Giảm 70% thời gian làm báo cáo.",
          
          details: {
            problem: {
              title: "Thách thức",
              content: "Các giám đốc chi nhánh vật lộn với các báo cáo rời rạc. Dữ liệu bán hàng từ một hệ thống, dữ liệu vay từ hệ thống khác. Việc tạo báo cáo hiệu suất hàng tuần mất tới 2 ngày làm thủ công trên Excel."
            },
            tools: {
              title: "Công nghệ",
              items: ["Power BI (DAX, Power Query)", "SQL Server", "Mô hình Star Schema"]
            },
            process: {
              title: "Quy trình",
              steps: [
                "Tích hợp dữ liệu: Kết nối Power BI với Data Warehouse SQL Server.",
                "Mô hình hóa: Xây dựng mô hình Star Schema (Bảng Fact: Giao dịch, Khoản vay; Bảng Dim: Chi nhánh, Thời gian, Khách hàng) để tối ưu hiệu năng.",
                "Định nghĩa chỉ số: Viết các hàm DAX phức tạp cho 'Tỷ lệ LDR' và 'Biên lãi ròng (NIM)'.",
                "Thiết kế UI: Tạo dashboard quản trị với khả năng drill-down (đi sâu) từ Vùng -> Chi nhánh -> Nhân viên quan hệ khách hàng."
              ]
            },
            result: {
              title: "Kết quả",
              content: "Cung cấp một dashboard 'Nguồn sự thật duy nhất' cho tất cả Giám đốc chi nhánh. Thời gian báo cáo giảm từ 2 ngày xuống gần như thời gian thực. Ban lãnh đạo có thể phát hiện các chi nhánh kém hiệu quả ngay lập tức."
            }
          }
        },
        {
          slug: "seo-analytics-project",
          title: "Phân tích Hiệu suất SEO",
          tags: ["Marketing", "SEO", "Google Search Console", "Python"],
          link: "https://github.com/kina2711/SEO_Analytics_Project",
          objective: "Phân tích lưu lượng truy cập và hiệu suất từ khóa để cải thiện thứ hạng tìm kiếm tự nhiên.",
          description: "Xử lý dữ liệu Google Search Console để xác định các từ khóa tiềm năng cao và khoảng trống nội dung.",
          metrics: "Xác định các từ khóa 'Dễ ăn'. Chiến lược đề xuất giúp tăng 10% traffic tự nhiên.",
          
          details: {
            problem: {
              title: "Thách thức",
              content: "Website có nội dung tốt nhưng không lên được Trang 1 cho các từ khóa chính. Đội Marketing cần biết từ khóa nào đang 'tiệm cận chiến thắng' (xếp hạng 11-20) để tập trung tối ưu hóa, thay vì đoán mò."
            },
            tools: {
              title: "Công nghệ",
              items: ["Google Search Console API", "Python (Pandas)", "Trực quan hóa dữ liệu", "Phân cụm từ khóa"]
            },
            process: {
              title: "Quy trình",
              steps: [
                "Trích xuất dữ liệu: Dùng Python lấy dữ liệu hiệu suất (Clicks, Impressions, CTR, Vị trí) từ GSC.",
                "Phân tích cơ hội: Lọc ra các từ khóa 'Low Hanging Fruits' - có lượt hiển thị cao, CTR ổn nhưng xếp hạng từ 10 đến 20.",
                "Khoảng trống nội dung: Xác định các chủ đề mà đối thủ đang xếp hạng nhưng mình chưa có bài viết."
              ]
            },
            result: {
              title: "Kết quả",
              content: "Cung cấp danh sách 50+ từ khóa ưu tiên tối ưu. Bằng cách cập nhật các bài viết cũ với các từ khóa này, website đã tăng 10% traffic tự nhiên và nhiều từ khóa lọt vào Trang 1 sau 2 tháng."
            }
          }
        },
        {
          slug: "ai-agent-automation",
          title: "Tự động hóa Chỉ số YouTube với AI Agent",
          tags: ["Automation", "n8n", "AI Agent", "API"],
          link: "https://github.com/kina2711/ai_agent_with_n8n",
          objective: "Tự động hóa việc theo dõi hiệu suất kênh YouTube sử dụng các tác nhân AI và quy trình low-code.",
          description: "Xây dựng quy trình n8n để tự động lấy số liệu video, dùng AI tóm tắt hiệu suất và cập nhật báo cáo mà không cần can thiệp thủ công.",
          metrics: "Tiết kiệm 5 giờ/tuần nhập liệu. Tự động hóa các insight hàng tuần.",
          
          details: {
            problem: {
              title: "Thách thức",
              content: "Việc theo dõi phân tích YouTube thủ công đòi hỏi phải mở dashboard, copy số liệu từng video (View, Sub, Doanh thu) và paste vào Excel. Việc này lặp đi lặp lại, nhàm chán và không cung cấp ngay insight về lý do *tại sao* video đó hiệu quả."
            },
            tools: {
              title: "Công nghệ",
              items: ["n8n (Tự động hóa)", "YouTube Data API", "OpenAI/Gemini API (Phân tích AI)", "Google Sheets", "Telegram/Slack (Thông báo)"]
            },
            process: {
              title: "Quy trình",
              steps: [
                "Thiết kế Workflow: Tạo quy trình n8n kích hoạt vào mỗi sáng thứ Hai.",
                "Lấy dữ liệu: Kết nối API YouTube để lấy thống kê các video mới nhất.",
                "AI Agent: Chuyển dữ liệu cho AI (LLM) với prompt 'Phân tích hiệu suất và so sánh với trung bình'.",
                "Hành động: Workflow lưu số liệu thô vào Google Sheets và gửi bản tóm tắt phân tích qua Telegram."
              ]
            },
            result: {
              title: "Kết quả",
              content: "Tự động hóa hoàn toàn vòng lặp báo cáo. Tôi tiết kiệm được 5 giờ nhập liệu mỗi tuần và nhận được bản tóm tắt sức khỏe kênh chất lượng cao do AI tạo ngay trên điện thoại."
            }
          }
        },
      ],
    },
    education: {
      title: "Học Vấn",
      school: "Đại học Dược Hà Nội",
      desc: "Khoa Quản lý và Kinh tế Dược. Tập trung vào Tư duy Hệ thống và Quản lý Quy trình.",
      certTitle: "Chứng chỉ của tôi",
      certDesc: "Các chứng chỉ chuyên môn khẳng định năng lực của tôi",
      certs: [
        { 
          title: "Google Data Analytics Professional Certificate", 
          issuer: "Coursera", 
          image: "/cert/google-da.jpg",
          link: "https://www.credly.com/badges/0dfc9f0a-9c74-4926-a8b8-9bec4cd1356d" 
        },
        { 
          title: "Google Advanced Data Analytics Certificate", 
          issuer: "Coursera", 
          image: "/cert/google-advanced.jpg", 
          link: "https://www.credly.com/badges/fef4f6ad-46e0-44f8-b89a-2871d7ffd1c4" 
        },
        { 
          title: "Google Business Intelligence Certificate", 
          issuer: "Coursera", 
          image: "/cert/google-bi.jpg", 
          link: "https://www.credly.com/badges/c7f4839d-2d34-4052-8776-503cff8e8078" 
        },
        { 
          title: "SQL (Advanced) Certificate", 
          issuer: "HackerRank", 
          image: "/cert/hackerrank.jpg", 
          link: "https://www.hackerrank.com/certificates/iframe/c194b6d6eef9" 
        },
      ]
    },
    footer: {
      text: "Xây dựng bởi",
      copyright: "© 2026. Sẵn sàng cho thử thách mới.",
    }
  }
}