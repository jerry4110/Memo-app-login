import os
import shutil
import sys

# 바탕화면 경로 (절대 경로 사용)
desktop = r'C:\Users\Jerry.kim\Desktop'
folder_path = os.path.join(desktop, '오늘의 엑셀')

print(f"Desktop 경로: {desktop}")
print(f"생성할 폴더: {folder_path}")

# 폴더 존재 확인
if not os.path.exists(desktop):
    print(f"오류: 바탕화면 경로가 존재하지 않습니다: {desktop}")
    sys.exit(1)

# 폴더 생성
try:
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)
        print(f"폴더 생성 완료: {folder_path}")
    else:
        print(f"폴더 이미 존재: {folder_path}")
except Exception as e:
    print(f"폴더 생성 오류: {e}")
    sys.exit(1)

# 바탕화면의 Excel 파일 찾기 (하위 폴더 제외)
excel_extensions = ('.xlsx', '.xls', '.xlsm')
moved_files = []

try:
    items = os.listdir(desktop)
    print(f"바탕화면 항목 수: {len(items)}")
    
    for item in items:
        item_path = os.path.join(desktop, item)
        # 파일이고 Excel 확장자인 경우만
        if os.path.isfile(item_path) and item.lower().endswith(excel_extensions):
            try:
                dest_path = os.path.join(folder_path, item)
                shutil.move(item_path, dest_path)
                moved_files.append(item)
                print(f"이동 완료: {item}")
            except Exception as e:
                print(f"이동 실패 {item}: {e}")
    
    print(f"\n총 {len(moved_files)}개 파일 이동 완료")
    
    # 최종 확인
    if os.path.exists(folder_path):
        files_in_folder = os.listdir(folder_path)
        print(f"폴더 내 파일 수: {len(files_in_folder)}")
    
except Exception as e:
    print(f"오류 발생: {e}")
    import traceback
    traceback.print_exc()

