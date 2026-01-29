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
      desc: "Transforming complex datasets into a competitive advantage. From architecting robust ETL pipelines with Airflow to crafting actionable dashboards in Looker/Power BI, I build the data infrastructure that powers strategic decisions. With versatile experience spanning Healthcare, Finance, and Marketing, I deliver insights that optimize performance and revenue.",
    },
    about: {
      title: "About Me",
      desc: "Detail-oriented Data Analyst with over 1 year of experience in Healthcare and Marketing Analytics. Skilled in SQL, Python, and Data Visualization (Looker Studio/Power BI), I specialize in transforming raw data into actionable insights that drive platform performance and operational efficiency. With a Pharmacy degree providing deep domain understanding, I am now expanding my technical skillset into Data Engineering (ETL, BigQuery, Airflow) to build scalable data solutions. Eager to leverage this unique blend of analytical rigor and emerging engineering skills to contribute to a data-driven HealthTech environment. Furthermore, I have demonstrated versatility by applying analytical frameworks to diverse domains including Banking, HR, and Digital Marketing.",
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
          title: "VPI Hospital Reporting Automation (ETL Project)",
          tags: ["Healthcare", "Marketing", "Data Engineering"],
          link: "https://github.com/kina2711/vpi_etl_pipeline",
          objective: "Architect a robust ETL pipeline to synchronize high-volume hospital data from PostgreSQL to Google Sheets/BI.",
          skills: "Python (OOP), SQL, Airflow Concept, Batch Processing, PostgreSQL.",
          description: "Designed a configuration-driven ETL pipeline with smart batch processing. Automated 4 critical daily reports and engineered retry mechanisms for reliability.",
          metrics: "Reduced manual data prep time by 90% (15 hours/week). Achieved 99% pipeline reliability.",
        },
        {
          title: "VPI Health - Patient Care & Booking Platform",
          tags: ["Healthcare", "Marketing", "Product"],
          link: "https://github.com/kina2711/vpi-health",
          objective: "Develop a booking platform to streamline patient care and appointments.",
          skills: "Next.js, Tailwind CSS, Database Design, User Flow Analysis.",
          description: "Built the frontend and data structure for a patient booking system, ensuring smooth user experience and accurate data capture for analytics.",
          metrics: "Improved booking process efficiency and data capture accuracy.",
        },
        {
          title: "TikTok Data Scraping and Analysis",
          tags: ["Healthcare", "Marketing", "Data Crawling"],
          link: "https://github.com/kina2711/scrape_tiktok",
          objective: "Extract and analyze TikTok data to identify trends and inform marketing strategies.",
          skills: "Python, Selenium, Data Cleaning, Looker Studio.",
          description: "Scraped TikTok data using Selenium (automated login), cleaned data, and visualized trends on Looker Studio.",
          metrics: "Boosted audience engagement by 12%. Reduced manual research effort by 50%.",
        },
        {
          title: "Customer 360 (RFM Model)",
          tags: ["Marketing", "Analytics"],
          link: "https://github.com/kina2711/customer_360",
          objective: "Segment customers using RFM (Recency, Frequency, Monetary) to enhance retention.",
          skills: "SQL, Power BI, RFM Analysis, OLAP Transformation.",
          description: "Analyzed transaction data to segment customers (Champions, At Risk, etc.) and developed targeted strategies.",
          metrics: "Increased retention by 15% and reduced churn in high-risk segments by 20%.",
        },
        {
          title: "FPT Customer Sentiment Analysis",
          tags: ["Marketing", "NLP", "Machine Learning"],
          link: "https://github.com/kina2711/customer_sentiment_analysis",
          objective: "Analyze customer feedback to measure sentiment and improve service quality.",
          skills: "Python, NLP, Scikit-learn, Sentiment Analysis.",
          description: "Applied NLP to extract sentiment from reviews, classified them using ML models, and visualized trends.",
          metrics: "Improved Customer Satisfaction (CSAT) by 25%. Reduced complaints by 15%.",
        },
        {
          title: "Gamelytics: Mobile Game Lifecycle",
          tags: ["Game", "Big Data"],
          link: "https://github.com/kina2711/game-lifecycle-analytics",
          objective: "Analyze user lifecycle (1M+ logs) to optimize retention and monetization.",
          skills: "BigQuery, Python, A/B Testing, Statistical Analysis.",
          description: "Built ETL pipeline for game logs, identified retention drop-offs, and analyzed 'Whale' user behavior.",
          metrics: "Saved estimated $50k in revenue loss. Identified 95% drop-off at Day 10.",
        },
        {
          title: "Job Listings Scraper",
          tags: ["Data Crawling", "Automation"],
          link: "https://github.com/kina2711/scrape_job_using_python",
          objective: "Automate the collection of job market data for analysis.",
          skills: "Python, Selenium, BeautifulSoup, CSV.",
          description: "Developed a script to scrape job descriptions, titles, and requirements from major job boards.",
          metrics: "Collected 1000+ job postings for market trend analysis.",
        },
        {
          title: "Banking Credit Segment Exploration",
          tags: ["Banking", "Risk Analytics"],
          link: "https://github.com/kina2711/Banking_Credit_Segment_Exploration",
          objective: "Analyze credit data to identify distinct customer segments for risk assessment.",
          skills: "Python, Clustering (K-Means), Pandas, Matplotlib.",
          description: "Explored credit usage patterns to group customers, aiding in risk stratifiction and product targeting.",
          metrics: "Identified high-risk vs. high-value credit segments.",
        },
        {
          title: "HR Analytics",
          tags: ["HR", "People Analytics"],
          link: "https://github.com/kina2711/HR_analytics_project",
          objective: "Analyze employee data to understand attrition and performance factors.",
          skills: "Power BI, Python, Data Cleaning, Correlation Analysis.",
          description: "Visualized HR metrics to identify departments with high turnover and potential causes.",
          metrics: "Provided insights to improve employee retention strategies.",
        },
        {
          title: "Bank Deposit Segmentation Analysis",
          tags: ["Banking", "Marketing"],
          link: "https://github.com/kina2711/Bank_Deposit_Segmentation_Analysis",
          objective: "Segment deposit customers to optimize cross-selling strategies.",
          skills: "Python, Data Visualization, Segmentation Techniques.",
          description: "Analyzed deposit behaviors to create profiles for targeted marketing campaigns.",
          metrics: "Enhanced targeting precision for deposit products.",
        },
        {
          title: "Banking Payment Account Segmentation",
          tags: ["Banking", "Product"],
          link: "https://github.com/kina2711/Banking_Payment_Account_Segmentation",
          objective: "Understand usage patterns of payment accounts for product improvement.",
          skills: "SQL, Python, Behavioral Analysis.",
          description: "Grouped users based on transaction frequency and volume to tailor account features.",
          metrics: "Informed product roadmap for payment services.",
        },
        {
          title: "Banking Intelligence",
          tags: ["Banking", "BI"],
          link: "https://github.com/kina2711/Banking-Intelligence",
          objective: "Create a comprehensive BI solution for banking operations.",
          skills: "Power BI, SQL, Data Modeling.",
          description: "Integrated multiple banking data sources into a unified dashboard for executive overview.",
          metrics: "Streamlined reporting for branch managers.",
        },
        {
          title: "SEO Analytics",
          tags: ["Marketing", "SEO"],
          link: "https://github.com/kina2711/SEO_Analytics_Project",
          objective: "Analyze website traffic and keyword performance to improve search rankings.",
          skills: "Google Search Console, Python, Data Analysis.",
          description: "Processed SEO data to identify high-potential keywords and content gaps.",
          metrics: "Recommended strategies to boost organic traffic.",
        },
        {
          title: "Automated YouTube Metrics Pipeline",
          tags: ["Marketing", "Automation", "n8n"],
          link: "https://github.com/kina2711/ai_agent_with_n8n",
          objective: "Automate the tracking of YouTube channel performance using AI agents.",
          skills: "n8n, YouTube API, Google Sheets, Automation.",
          description: "Built a workflow to auto-fetch video metrics and update reports without manual intervention.",
          metrics: "Saved 5 hours/week on manual data entry.",
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
      desc: "Biến dữ liệu phức tạp thành lợi thế cạnh tranh. Từ việc xây dựng luồng ETL mạnh mẽ với Airflow đến thiết kế dashboard chiến lược trên Looker/Power BI, tôi kiến tạo hạ tầng dữ liệu giúp thúc đẩy các quyết định quan trọng. Với kinh nghiệm đa dạng từ Y tế, Tài chính đến Marketing, tôi mang đến những insight giúp tối ưu hóa hiệu suất và doanh thu.",
    },
    about: {
      title: "Về Tôi",
      desc: "Chuyên viên Phân tích Dữ liệu tỉ mỉ với hơn 1 năm kinh nghiệm trong lĩnh vực Y tế và Marketing Analytics. Thành thạo SQL, Python và Trực quan hóa dữ liệu (Looker Studio/Power BI), tôi chuyên biến dữ liệu thô thành những hiểu biết hành động giúp thúc đẩy hiệu suất nền tảng và hiệu quả vận hành. Với tấm bằng Dược sĩ cung cấp sự hiểu biết sâu sắc về nghiệp vụ, tôi hiện đang mở rộng kỹ năng kỹ thuật sang Kỹ thuật dữ liệu (ETL, BigQuery, Airflow) để xây dựng các giải pháp dữ liệu mở rộng. Mong muốn tận dụng sự kết hợp độc đáo giữa tư duy phân tích chặt chẽ và kỹ năng kỹ thuật mới để đóng góp cho môi trường HealthTech dựa trên dữ liệu. Ngoài ra, tôi đã chứng minh sự linh hoạt khi áp dụng tư duy phân tích vào các lĩnh vực đa dạng như Ngân hàng, Nhân sự và Digital Marketing.",
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
        { name: "Data Storytelling", icon: "/skills/data-storytelling.svg", desc: "Proven ability to translate complex datasets into actionable insights for non-tech stakeholders." },
        { name: "Leadership", icon: "/skills/leadership.svg", desc: "Founder/Admin of 'Xom Data' (20,000+ members) – Demonstrated strong sense of responsibility." },
        { name: "Detail-Oriented", icon: "/skills/detail-oriented.svg", desc: "Experience handling sensitive Healthcare/Medical data, ensuring 99% data integrity." },
        { name: "Growth Mindset", icon: "/skills/growth-mindset.svg", desc: "Thrives in fast-paced environments, self-taught new technologies (Airflow, Docker)." },
        { name: "Critical Thinking", icon: "/skills/critical-thinking.svg", desc: "Ability to approach problems from both business and technical perspectives." }
      ]
    },
    projects: {
      title: "Dự Án Tiêu Biểu",
      desc: "Danh mục dự án toàn diện bao gồm Y tế, Marketing, Ngân hàng, Game và Kỹ thuật Dữ liệu.",
      list: [
        {
          title: "VPI Hospital Reporting Automation (ETL Project)",
          tags: ["Healthcare", "Marketing", "Data Engineering"],
          link: "https://github.com/kina2711/vpi_etl_pipeline",
          objective: "Xây dựng pipeline ETL mạnh mẽ để đồng bộ dữ liệu bệnh viện từ PostgreSQL sang Google Sheets/BI.",
          skills: "Python (OOP), SQL, Airflow Concept, Batch Processing, PostgreSQL.",
          description: "Thiết kế ETL pipeline hướng cấu hình với xử lý batch thông minh. Tự động hóa 4 báo cáo quan trọng hàng ngày.",
          metrics: "Giảm 90% thời gian chuẩn bị dữ liệu thủ công (15h/tuần). Đạt độ tin cậy pipeline 99%.",
        },
        {
          title: "VPI Health - Patient Care & Booking Platform",
          tags: ["Healthcare", "Marketing", "Product"],
          link: "https://github.com/kina2711/vpi-health",
          objective: "Phát triển nền tảng đặt lịch để hợp lý hóa quy trình chăm sóc bệnh nhân.",
          skills: "Next.js, Tailwind CSS, Thiết kế CSDL, Phân tích luồng người dùng.",
          description: "Xây dựng frontend và cấu trúc dữ liệu cho hệ thống đặt lịch, đảm bảo trải nghiệm người dùng mượt mà và thu thập dữ liệu chính xác.",
          metrics: "Cải thiện hiệu quả quy trình đặt lịch và độ chính xác khi thu thập dữ liệu.",
        },
        {
          title: "TikTok Data Scraping and Analysis",
          tags: ["Healthcare", "Marketing", "Data Crawling"],
          link: "https://github.com/kina2711/scrape_tiktok",
          objective: "Trích xuất và phân tích dữ liệu TikTok để xác định xu hướng và định hướng chiến lược marketing.",
          skills: "Python, Selenium, Làm sạch dữ liệu, Looker Studio.",
          description: "Crawl dữ liệu TikTok bằng Selenium, làm sạch dữ liệu và trực quan hóa xu hướng trên Looker Studio.",
          metrics: "Tăng tương tác khán giả lên 12%. Giảm 50% công sức nghiên cứu thủ công.",
        },
        {
          title: "Customer 360 (RFM Model)",
          tags: ["Marketing", "Analytics"],
          link: "https://github.com/kina2711/customer_360",
          objective: "Phân khúc khách hàng sử dụng mô hình RFM để tối ưu hóa giữ chân.",
          skills: "SQL, Power BI, Phân tích RFM, Chuyển đổi OLAP.",
          description: "Phân tích dữ liệu giao dịch để phân nhóm khách hàng (VIP, Nguy cơ rời bỏ...) và phát triển chiến lược mục tiêu.",
          metrics: "Tăng tỷ lệ giữ chân 15% và giảm tỷ lệ rời bỏ ở nhóm rủi ro cao 20%.",
        },
        {
          title: "FPT Customer Sentiment Analysis",
          tags: ["Marketing", "NLP", "Machine Learning"],
          link: "https://github.com/kina2711/customer_sentiment_analysis",
          objective: "Phân tích phản hồi khách hàng để đo lường cảm xúc và cải thiện chất lượng dịch vụ.",
          skills: "Python, NLP, Scikit-learn, Phân tích cảm xúc.",
          description: "Áp dụng NLP để trích xuất cảm xúc từ đánh giá, phân loại bằng mô hình ML và trực quan hóa xu hướng.",
          metrics: "Cải thiện sự hài lòng khách hàng (CSAT) 25%. Giảm khiếu nại 15%.",
        },
        {
          title: "Gamelytics: Mobile Game Lifecycle",
          tags: ["Game", "Big Data"],
          link: "https://github.com/kina2711/game-lifecycle-analytics",
          objective: "Phân tích vòng đời người dùng (1M+ logs) để tối ưu retention và doanh thu.",
          skills: "BigQuery, Python, A/B Testing, Phân tích thống kê.",
          description: "Xây dựng ETL cho log game, xác định điểm rơi retention và phân tích hành vi người dùng 'Whale'.",
          metrics: "Cứu ước tính $50k doanh thu thất thoát. Xác định 95% rời bỏ ở Ngày 10.",
        },
        {
          title: "Job Listings Scraper",
          tags: ["Data Crawling", "Automation"],
          link: "https://github.com/kina2711/scrape_job_using_python",
          objective: "Tự động hóa việc thu thập dữ liệu thị trường việc làm để phân tích.",
          skills: "Python, Selenium, BeautifulSoup, CSV.",
          description: "Phát triển script để crawl mô tả công việc, tiêu đề và yêu cầu từ các trang tuyển dụng lớn.",
          metrics: "Thu thập 1000+ tin tuyển dụng để phân tích xu hướng thị trường.",
        },
        {
          title: "Banking Credit Segment Exploration",
          tags: ["Banking", "Risk Analytics"],
          link: "https://github.com/kina2711/Banking_Credit_Segment_Exploration",
          objective: "Phân tích dữ liệu tín dụng để xác định các phân khúc khách hàng cho đánh giá rủi ro.",
          skills: "Python, Clustering (K-Means), Pandas, Matplotlib.",
          description: "Khám phá mô hình sử dụng tín dụng để nhóm khách hàng, hỗ trợ phân tầng rủi ro.",
          metrics: "Xác định rõ các phân khúc tín dụng rủi ro cao vs giá trị cao.",
        },
        {
          title: "HR Analytics",
          tags: ["HR", "People Analytics"],
          link: "https://github.com/kina2711/HR_analytics_project",
          objective: "Phân tích dữ liệu nhân viên để hiểu các yếu tố ảnh hưởng đến nghỉ việc và hiệu suất.",
          skills: "Power BI, Python, Làm sạch dữ liệu, Phân tích tương quan.",
          description: "Trực quan hóa các chỉ số HR để xác định các phòng ban có tỷ lệ biến động nhân sự cao.",
          metrics: "Cung cấp thông tin chi tiết để cải thiện chiến lược giữ chân nhân tài.",
        },
        {
          title: "Bank Deposit Segmentation Analysis",
          tags: ["Banking", "Marketing"],
          link: "https://github.com/kina2711/Bank_Deposit_Segmentation_Analysis",
          objective: "Phân khúc khách hàng tiền gửi để tối ưu hóa chiến lược bán chéo.",
          skills: "Python, Trực quan hóa dữ liệu, Kỹ thuật phân khúc.",
          description: "Phân tích hành vi gửi tiền để tạo hồ sơ cho các chiến dịch marketing mục tiêu.",
          metrics: "Nâng cao độ chính xác trong việc nhắm mục tiêu sản phẩm tiền gửi.",
        },
        {
          title: "Banking Payment Account Segmentation",
          tags: ["Banking", "Product"],
          link: "https://github.com/kina2711/Banking_Payment_Account_Segmentation",
          objective: "Hiểu mô hình sử dụng tài khoản thanh toán để cải tiến sản phẩm.",
          skills: "SQL, Python, Phân tích hành vi.",
          description: "Nhóm người dùng dựa trên tần suất và khối lượng giao dịch để tùy chỉnh tính năng tài khoản.",
          metrics: "Cung cấp thông tin cho lộ trình phát triển sản phẩm thanh toán.",
        },
        {
          title: "Banking Intelligence",
          tags: ["Banking", "BI"],
          link: "https://github.com/kina2711/Banking-Intelligence",
          objective: "Tạo giải pháp BI toàn diện cho hoạt động ngân hàng.",
          skills: "Power BI, SQL, Mô hình hóa dữ liệu.",
          description: "Tích hợp nhiều nguồn dữ liệu ngân hàng vào một dashboard thống nhất cho ban điều hành.",
          metrics: "Hợp lý hóa quy trình báo cáo cho các giám đốc chi nhánh.",
        },
        {
          title: "SEO Analytics",
          tags: ["Marketing", "SEO"],
          link: "https://github.com/kina2711/SEO_Analytics_Project",
          objective: "Phân tích lưu lượng website và hiệu suất từ khóa để cải thiện thứ hạng tìm kiếm.",
          skills: "Google Search Console, Python, Phân tích dữ liệu.",
          description: "Xử lý dữ liệu SEO để xác định các từ khóa tiềm năng cao và các khoảng trống nội dung.",
          metrics: "Đề xuất các chiến lược để thúc đẩy lưu lượng truy cập tự nhiên.",
        },
        {
          title: "Automated YouTube Metrics Pipeline",
          tags: ["Marketing", "Automation", "n8n"],
          link: "https://github.com/kina2711/ai_agent_with_n8n",
          objective: "Tự động hóa theo dõi hiệu suất kênh YouTube sử dụng AI agents.",
          skills: "n8n, YouTube API, Google Sheets, Automation.",
          description: "Xây dựng luồng công việc tự động lấy chỉ số video và cập nhật báo cáo không cần thao tác thủ công.",
          metrics: "Tiết kiệm 5 giờ/tuần cho việc nhập liệu thủ công.",
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