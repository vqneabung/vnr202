/**
 * Dữ liệu các nhân vật lịch sử Việt Nam
 * Có thể dễ dàng thêm nhân vật mới bằng cách thêm object vào mảng
 */

export interface HistoricalFigure {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number; // undefined nếu còn sống
  image: string;
  role: string; // Chức vụ/vai trò chính
  description: string; // Mô tả ngắn về đóng góp
  category: 'leader' | 'general' | 'revolutionary' | 'martyr'; // Phân loại
  aliases?: string[]; // Các tên khác (bí danh)
}

/**
 * Danh sách các nhân vật lịch sử
 * Thêm nhân vật mới: copy object và thay đổi thông tin
 */
export const historicalFigures: HistoricalFigure[] = [
  {
    id: 'ho-chi-minh',
    name: 'Hồ Chí Minh',
    birthYear: 1890,
    deathYear: 1969,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ho_Chi_Minh_1946.jpg/440px-Ho_Chi_Minh_1946.jpg',
    role: 'Chủ tịch nước VNDCCH',
    description: 'Người sáng lập Đảng Cộng sản Việt Nam, lãnh đạo cách mạng giải phóng dân tộc, được UNESCO vinh danh là Anh hùng giải phóng dân tộc, Danh nhân văn hóa thế giới.',
    category: 'leader',
    aliases: ['Nguyễn Ái Quốc', 'Nguyễn Sinh Cung', 'Bác Hồ']
  },
  {
    id: 'vo-nguyen-giap',
    name: 'Võ Nguyên Giáp',
    birthYear: 1911,
    deathYear: 2013,
    image: 'https://nhandan.vn/special/nguoi-anh-ca-cua-QDNDVN/assets/GpKITqzAvt/vng-1940-750x1060.jpg',
    role: 'Đại tướng, Bộ trưởng Quốc phòng',
    description: 'Tổng Tư lệnh Quân đội Nhân dân Việt Nam, người chỉ huy chiến thắng Điện Biên Phủ lừng lẫy năm châu, chấn động địa cầu.',
    category: 'general'
  },
  {
    id: 'pham-van-dong',
    name: 'Phạm Văn Đồng',
    birthYear: 1906,
    deathYear: 2000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Ph%E1%BA%A1m_V%C4%83n_%C4%90%E1%BB%93ng_1972.jpg',
    role: 'Thủ tướng Chính phủ',
    description: 'Thủ tướng tại vị lâu nhất trong lịch sử Việt Nam (1955-1987), đóng góp to lớn trong công cuộc xây dựng và bảo vệ Tổ quốc.',
    category: 'leader'
  },
  {
    id: 'truong-chinh',
    name: 'Trường Chinh',
    birthYear: 1907,
    deathYear: 1988,
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/TruongChinh1955.jpg',
    role: 'Tổng Bí thư Đảng Cộng sản',
    description: 'Nhà lý luận xuất sắc của Đảng, tác giả "Đề cương văn hóa Việt Nam", Chủ tịch Hội đồng Nhà nước.',
    category: 'leader'
  },
  {
    id: 'le-duan',
    name: 'Lê Duẩn',
    birthYear: 1907,
    deathYear: 1986,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Le_duan.png',
    role: 'Bí thư thứ nhất BCH TW Đảng',
    description: 'Lãnh đạo cuộc kháng chiến chống Mỹ đến thắng lợi hoàn toàn, thống nhất đất nước năm 1975.',
    category: 'leader'
  },
  {
    id: 'ton-duc-thang',
    name: 'Tôn Đức Thắng',
    birthYear: 1888,
    deathYear: 1980,
    image: 'https://upload.wikimedia.org/wikipedia/vi/7/73/Tonducthang.jpg',
    role: 'Chủ tịch nước CHXHCNVN',
    description: 'Nhà cách mạng tiền bối, Chủ tịch nước thứ hai của Việt Nam, biểu tượng của khối đại đoàn kết toàn dân.',
    category: 'leader'
  },
  {
    id: 'nguyen-thi-minh-khai',
    name: 'Nguyễn Thị Minh Khai',
    birthYear: 1910,
    deathYear: 1941,
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Nguyen_Thi_Minh_Khai.jpg',
    role: 'Bí thư Thành ủy Sài Gòn-Chợ Lớn',
    description: 'Nữ chiến sĩ cộng sản kiên cường, lãnh đạo phong trào cách mạng ở Nam Kỳ, anh dũng hy sinh khi mới 31 tuổi.',
    category: 'martyr'
  },
  {
    id: 'vo-thi-sau',
    name: 'Võ Thị Sáu',
    birthYear: 1933,
    deathYear: 1952,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Portrait_of_V%C3%B5_Th%E1%BB%8B_S%C3%A1u.jpg/250px-Portrait_of_V%C3%B5_Th%E1%BB%8B_S%C3%A1u.jpg',
    role: 'Anh hùng lực lượng vũ trang',
    description: 'Nữ anh hùng trẻ tuổi nhất Việt Nam, bị thực dân Pháp xử bắn khi mới 19 tuổi, biểu tượng của tinh thần bất khuất.',
    category: 'martyr'
  },
  {
    id: 'nguyen-van-troi',
    name: 'Nguyễn Văn Trỗi',
    birthYear: 1940,
    deathYear: 1964,
    image: 'https://chinhtrivaphattrien.vn/uploads/2023/04/12/f1307d47-8c57-4864-b396-d9d8ae767fb4-1681315248.jpg',
    role: 'Anh hùng lực lượng vũ trang',
    description: 'Người thợ điện yêu nước, mưu đồ ám sát Bộ trưởng Quốc phòng Mỹ McNamara, anh dũng hy sinh tại pháp trường.',
    category: 'martyr'
  },
  {
    id: 'tran-phu',
    name: 'Trần Phú',
    birthYear: 1904,
    deathYear: 1931,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tr%E1%BA%A7n_Ph%C3%BA.jpg/250px-Tr%E1%BA%A7n_Ph%C3%BA.jpg',
    role: 'Tổng Bí thư đầu tiên của Đảng',
    description: 'Tổng Bí thư đầu tiên của Đảng Cộng sản Việt Nam, tác giả "Luận cương chính trị", hy sinh khi mới 27 tuổi.',
    category: 'revolutionary'
  },
  {
    id: 'le-hong-phong',
    name: 'Lê Hồng Phong',
    birthYear: 1902,
    deathYear: 1942,
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Le_Hong_Phong.gif',
    role: 'Tổng Bí thư Đảng Cộng sản',
    description: 'Nhà lãnh đạo xuất sắc của Đảng, người có công lớn trong việc khôi phục Đảng sau thời kỳ khó khăn.',
    category: 'revolutionary'
  },
  {
    id: 'hoang-van-thu',
    name: 'Hoàng Văn Thụ',
    birthYear: 1909,
    deathYear: 1944,
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Ho%C3%A0ng_V%C4%83n_Th%E1%BB%A5.JPG',
    role: 'Ủy viên Thường vụ TW Đảng',
    description: 'Nhà hoạt động cách mạng xuất sắc, lãnh đạo phong trào cách mạng Bắc Kỳ, kiên cường trước kẻ thù.',
    category: 'revolutionary'
  },
  {
    id: 'ly-tu-trong',
    name: 'Lý Tự Trọng',
    birthYear: 1914,
    deathYear: 1931,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/%E1%BA%A2nh_ch%E1%BB%A5p_L%C3%BD_T%E1%BB%B1_Tr%E1%BB%8Dng_%281914-1931%29.jpg',
    role: 'Đoàn viên Thanh niên Cộng sản',
    description: 'Người đoàn viên Thanh niên Cộng sản đầu tiên, hy sinh anh dũng khi mới 17 tuổi, câu nói "Con đường của thanh niên chỉ có thể là con đường cách mạng".',
    category: 'martyr'
  },
  {
    id: 'nguyen-van-cu',
    name: 'Nguyễn Văn Cừ',
    birthYear: 1912,
    deathYear: 1941,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Nguy%E1%BB%85n_V%C4%83n_C%E1%BB%AB.jpg',
    role: 'Tổng Bí thư Đảng Cộng sản',
    description: 'Tổng Bí thư trẻ tuổi nhất của Đảng, tác giả "Tự chỉ trích", lãnh đạo Đảng trong giai đoạn khó khăn.',
    category: 'revolutionary'
  },
  {
    id: 'ha-huy-tap',
    name: 'Hà Huy Tập',
    birthYear: 1906,
    deathYear: 1941,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Ha_Huy_Tap.jpg',
    role: 'Tổng Bí thư Đảng Cộng sản',
    description: 'Nhà lý luận của Đảng, có công lớn trong việc xây dựng đường lối cách mạng Việt Nam.',
    category: 'revolutionary'
  }
];

/**
 * Lấy nhân vật theo ID
 */
export const getFigureById = (id: string): HistoricalFigure | undefined => {
  return historicalFigures.find(figure => figure.id === id);
};

/**
 * Lấy nhân vật theo category
 */
export const getFiguresByCategory = (category: HistoricalFigure['category']): HistoricalFigure[] => {
  return historicalFigures.filter(figure => figure.category === category);
};

/**
 * Tìm kiếm nhân vật theo tên hoặc alias
 */
export const searchFigures = (query: string): HistoricalFigure[] => {
  const lowerQuery = query.toLowerCase();
  return historicalFigures.filter(figure => 
    figure.name.toLowerCase().includes(lowerQuery) ||
    figure.aliases?.some(alias => alias.toLowerCase().includes(lowerQuery)) ||
    figure.role.toLowerCase().includes(lowerQuery)
  );
};
